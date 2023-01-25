import React, { useState } from "react";
// importing Formik for automation of the Booking form
import { useFormik } from "formik";
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Button,
  VStack,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import AvailableTimes from "./AvailableTimes";

export default function BookingForm() {
  // Formik validations
  const { response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      resDate: "",
      resTime: "",
      guests: "",
    },
    onSubmit: (values) => {
      submit("/api/booked", values);
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
      console.log(values);
    },
    // Yup configurations
    validationSchema: Yup.object({
      resDate: Yup.string().required("Required"),
      // resTime: Yup.string().required("Required"),
      guests: Yup.string().required("Required"),
    }),
  });

  // option button will change after click triggers
  const [value, setValue] = useState("birthday");

  return (
    <div>
      <VStack paddingY={50} backgroundColor="#FBDABB">
        <Heading as="h1" marginBottom={25}>
          Booking Form
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={!!formik.errors.resDate && formik.touched.resDate}
          >
            <FormLabel htmlFor="res-date">Number of guests:</FormLabel>
            <Input
              type="date"
              name="resDate"
              id="res-date"
              {...formik.getFieldProps("resDate")}
            />
            <FormErrorMessage marginBottom={5}>
              {formik.errors.resDate}
            </FormErrorMessage>
          </FormControl>

          <FormLabel htmlFor="res-time">Choose time:</FormLabel>
          <AvailableTimes />

          <FormControl
            isInvalid={!!formik.errors.guests && formik.touched.guests}
          >
            <FormLabel htmlFor="guests">Number of guests:</FormLabel>
            <Input
              type="number"
              name="guests"
              id="guests"
              min={1}
              {...formik.getFieldProps("guests")}
            />
            <FormErrorMessage marginBottom={5}>
              {formik.errors.guests}
            </FormErrorMessage>
          </FormControl>

          <FormLabel htmlFor="occasion">Occasion:</FormLabel>
          <RadioGroup
            id="occasion"
            onChange={setValue}
            value={value}
            marginBottom={5}
          >
            <Stack direction="row">
              <Radio value="birthday">Birthday</Radio>
              <Radio value="anniversary">Anniversary</Radio>
            </Stack>
          </RadioGroup>

          <Button type="submit" marginTop={25}>
            Make Your Reservation
          </Button>
        </form>
      </VStack>
    </div>
  );
}
