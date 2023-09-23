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
  Google,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import LoginFooter from "@/components/footer/LoginFooter";
import SocialIcons from "@/components/footer/SocialIcons";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { loginValidate } from "@/lib/validate";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const router = useRouter();

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  //Formik and Login Validation
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });
  async function onSubmit(values: any) {
    try {
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      if (res?.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log("Login issue", err);
    }

    // console.log("username", values.username);
    // console.log("password", values.password);
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
              gap: "20px",
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
              }}
            >
              Login
            </Typography>
            <Box>Error: Invalid Credentials</Box>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                gap: "10px",
              }}
            >
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
                    gap: "7px",
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
                      placeholder="Username / E-mail"
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
                      {...formik.getFieldProps("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
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
                    color: "red",
                  }}
                >
                  {formik.errors.password}
                </Box>
              ) : (
                ""
              )}

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
                  type="submit"
                  variant="contained"
                  sx={{
                    background: "#21a3ba",
                    padding: "10px",
                    fontWeight: "bold",
                    width: "100%",
                    "&:hover": {
                      background: "#22c3be",
                    },
                  }}
                >
                  Login
                </Button>
                <Typography
                  sx={{
                    alignItems: "end",
                    fontWeight: "semi-bold",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  (OR)
                </Typography>
              </motion.div>
              <motion.div
                style={{
                  width: "100%",
                }}
                initial={{ opacity: 0, y: +50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="outlined"
                  style={{
                    width: "100%",
                    textTransform: "capitalize",
                    padding: "10px",
                    fontWeight: "bold",
                  }}
                  onClick={handleSignIn}
                >
                  <Google /> &nbsp; Sign in with Google
                </Button>
                <Typography
                  sx={{
                    alignItems: "end",
                    fontWeight: "semi-bold",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  New here ? <Link href="/register">Sign Up </Link>
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box
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
        </Box>
      </Box>
    </Box>
  );
}
