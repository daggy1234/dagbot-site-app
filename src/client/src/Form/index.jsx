import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Styles from "./styles";
import {animateScroll as scroll} from 'react-scroll';
import {Helmet} from "react-helmet";
import { Spinner,Alert,AlertTitle,AlertIcon,AlertDescription,Input,useToast}  from '@chakra-ui/core'
import { Form, Formik, useField, Field } from "formik";
import CustomButton from '../CustomButton/index'
import * as Yup from "yup";
import StarsInput from "../star/star";
import axios from 'axios';

async function PostData (data) {
    try{
      const res = await axios.post(`${window.location.origin}/api/formdata`,data,{headers: {Token: process.env.REACT_APP_SECRET}})
      return [true,"Success"]
    } catch(err) {
      switch(err.response.status){ 
        case 404:
          return [false,"Url Not Found (Server error)"]
        case 401:
          return [false,"Invalid AuthCredential (server error)"]
        case 409:
          return [false,"You have already submitted this form"]
        case 500:
          return [false,"Internal server error"]
        default:
          return [false,`Unkonow code ${err.response.status}`]
    }}
}

const AlertMessage = () => {
  
  return(<Alert
  status="success"
  variant="subtle"
  flexDirection="column"
  justifyContent="center"
  textAlign="center"
  height="200px"
>
  <AlertIcon boxSize="40px" mr={0} />
  <AlertTitle mt={4} mb={1} fontSize="lg">
    Thank you for your feedback!
  </AlertTitle>
  <AlertDescription maxWidth="sm">
    With feedback, we can improve dagbot and help deliver a better product for everyone.
  </AlertDescription>
</Alert>);
}
const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
    <Helmet>
      <title>Dagbot | FeedbackForm</title>
    </Helmet>
      <label className="helper" htmlFor={props.id || props.name}>
        {label}
      </label>
      <TextField
        className="text-input"
        id="standard-basic"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <Alert status="error" className="error-div">
          <AlertIcon  />
          <AlertTitle className="error-div" mr={2}>Error</AlertTitle>
          <AlertDescription className="error-div">{meta.error}</AlertDescription>
        </Alert>
      ) : null}
    </React.Fragment>
  );
};

const CustomCheck = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };
  return (
    <React.Fragment>
      <label className="checkbox helper-check">
        <Checkbox type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <Alert status="error" className="ignore-css-form">
          <AlertIcon />
          <AlertTitle mr={2}>Error</AlertTitle>
          <AlertDescription>{meta.error}</AlertDescription>
        </Alert>
      ) : null}
    </React.Fragment>
  );
};

const FinalForm = () => {
  const [stars, setStars] = useState(3);
  const [suc,sucvisible] = useState(false);
  const toast = useToast()
  return (
    <React.Fragment>
      {suc ? <AlertMessage /> : null}
      <Styles>
        <div>
          <Formik
            initialValues={{
              user: "",
              score: stars,
              acceptedTerms: false,
              updates: true,
              feedback: ""
            }}
            validationSchema={Yup.object({
              user: Yup.string()
                .min(8, "Username with hash should be more than 8 characters")
                .max(37, "Username with hash should be less than 37 characters")
                .required("Required"),
              score: Yup.number()
                .required("Required")
                .oneOf([1, 2, 3, 4, 5], "Please assign a score between 1 -5"),
              acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms"),
              feedback: Yup.string(),
              updates: Yup.boolean().oneOf(
                [true, false],
                "You must either select yes or no"
              )
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(async () => {
                const data = JSON.stringify(values, null, 2)
                console.log(data);
                const vals = await PostData(values);
                resetForm();
                setStars(false);
                setSubmitting(false)
                scroll.scrollToTop()
                console.log(vals)
                if (vals[0]) {
                  toast({
                    title: "Thanks for  your response!",
                    description: "With feedback, we can improve dagbot and help deliver a better product for everyone.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })} else {
                    toast({
                      title: "An error occurred.",
                      description: vals[1],
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                }, 10000);
            }}
          >
            {props => (
              <Form>
                <h1>Submit Feedback</h1>
                <h4>* means required</h4>
                <CustomTextInput
                  label="Username*"
                  name="user"
                  type="text"
                  placeholder="Enter your hashed username"
                />
                <CustomTextInput
                  label="Feedback"
                  name="feedback"
                  type="text"
                  placeholder="Enter any feedback!"
                  multiline={true}
                />
                <StarsInput />
                <CustomCheck name="updates">Updates</CustomCheck>
                <CustomCheck name="acceptedTerms">Accept*</CustomCheck>
                <br />
                <CustomButton type="submit" className="submit-button">
                  {props.isSubmitting ? <Spinner /> : "Submit"}
                </CustomButton>
              </Form>
            )}
          </Formik>
        </div>
      </Styles>
    </React.Fragment>
  );
};

export default FinalForm;
