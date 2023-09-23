"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  Person,
  Lock,
  Visibility,
  VisibilityOff,
  Email,
  Info,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import LoginFooter from "@/components/footer/LoginFooter";
import SocialIcons from "@/components/footer/SocialIcons";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { registerValidate } from "@/lib/validate";
import Link from "next/link";
import MessageModal from "@/components/modals/Message";
import PasswordRules from "@/utils/constants/PasswordRules.json";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  // const [showPassword, setShowPassword] = React.useState({password:false, cpassword: false});
  const [message, setMessage] = React.useState("");

  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();

  // Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values: any) {
    //console.log("jjjj", values);
    try {
      const userExistsRes = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const { user } = await userExistsRes.json();

      if (user) {
        setMessage("User Already Exists");
        router.push("/login");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        formik.resetForm();
        setMessage("User Registered Successfully");
        router.push("/register");
      } else {
        setMessage("User Registration Failed");
      }
    } catch (err) {
      console.log("Error during registration", err);
    }
  }

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFF",
          borderRadius: "0 0 75%  0",
          height: "99vh",
          color: "#000",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "absolute",
            top: "10%",
            right: "5%",
          }}
        >
          <motion.div>
            <Box
              component="img"
              src="/hLogo/logo-no-background.svg"
              width={500}
              sx={{ mr: 2 }}
            />
          </motion.div>
        </Box>

        <Box
          sx={{
            display: "flex",
            height: "80vh",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "serif",
                marginBottom: "10px",
              }}
            >
              Register / SignUp
            </Typography>

            {/* {Error for Credentials} */}
            {message && (
              <Box
                sx={{
                  background:
                    message === "User Registered Successfully"
                      ? "green"
                      : "orange",
                  color:
                    message === "User Registered Successfully"
                      ? "white"
                      : "black",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                {message}
              </Box>
            )}
            {/* SignUp form */}
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                gap: "20px",
              }}
              onSubmit={formik.handleSubmit}
              // onSubmit={handleSubmit}
            >
              {/* Username */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Person />
                    <Typography> Username</Typography>
                  </Box>
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "40ch" } }}
                    variant="outlined"
                  >
                    <TextField
                      variant="outlined"
                      type="text"
                      //name="usernmae"
                      placeholder="Username"
                      //value={username}
                      // onChange={(e) => {
                      //   setUsername(e.target.value);
                      // }}
                      {...formik.getFieldProps("username")}
                    />
                  </FormControl>
                </Box>
              </motion.div>
              {formik.touched.username && formik.errors.username ? (
                <Box
                  component="span"
                  sx={{
                    color: "red",
                  }}
                >
                  {formik.errors.username}
                </Box>
              ) : (
                ""
              )}

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Email />
                    <Typography> Email</Typography>
                  </Box>
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "40ch" } }}
                    variant="outlined"
                  >
                    <TextField
                      variant="outlined"
                      type="text"
                      //name="usernmae"
                      placeholder="E-mail"
                      //value={username}
                      // onChange={(e) => {
                      //   setUsername(e.target.value);
                      // }}
                      {...formik.getFieldProps("email")}
                    />
                  </FormControl>
                </Box>
              </motion.div>
              {formik.touched.email && formik.errors.email ? (
                <Box
                  component="span"
                  sx={{
                    color: "red",
                  }}
                >
                  {formik.errors.email}
                </Box>
              ) : (
                ""
              )}

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Lock />
                    <Typography> Password</Typography>
                  </Box>
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "40ch" } }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      // value={password}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                      {...formik.getFieldProps("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </motion.div>
              {formik.touched.password && formik.errors.password ? (
                <Box
                  component="span"
                  sx={{
                    color: "orange",
                    display: "flex",
                    justifyContent: "start",
                    margin: "0px",
                  }}
                >
                  {formik.errors.password} &nbsp; <Info onClick={handleOpen} />
                </Box>
              ) : (
                ""
              )}
              {showModal && (
                <MessageModal
                  showModal={showModal}
                  //handleOpen={handleOpen}
                  handleClose={handleClose}
                  messageText={PasswordRules}
                />
              )}
              {/* Confirm Password */}
              <motion.div
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Lock />
                    <Typography> Confirm Password</Typography>
                  </Box>
                  <FormControl
                    sx={{ width: { xs: "100%", sm: "40ch" } }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      // value={cpassword}
                      // onChange={(e) => {
                      //   setCPassword(e.target.value);
                      // }}
                      {...formik.getFieldProps("cpassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            //onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </motion.div>
              {formik.touched.cpassword && formik.errors.cpassword ? (
                <Box
                  component="span"
                  sx={{
                    color: "red",
                  }}
                >
                  {formik.errors.cpassword}
                </Box>
              ) : (
                ""
              )}

              {/* Register Button */}
              <motion.div
                style={{
                  width: "100%",
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#21a3ba",
                    fontWeight: "bold",
                    width: "100%",
                    "&:hover": {
                      background: "#22c3be",
                    },
                  }}
                >
                  Register / SignUp
                </Button>
                <Typography
                  sx={{
                    alignItems: "end",
                    fontWeight: "semi-bold",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  Already have an account ? <Link href="/login">Sign In </Link>
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            color: "#fff",
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoginFooter />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "end",
              gap: "20px",
              alignItems: "center",
              padding: "50px 30px",
            }}
          >
            <SocialIcons />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
}
