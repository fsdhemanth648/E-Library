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
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import LoginFooter from "@/components/footer/LoginFooter";
import SocialLogins from "@/components/footer/SocialLogins";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
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
                      placeholder="Username / E-mail"
                    />
                  </FormControl>
                </Box>
              </motion.div>

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

              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#21a3ba",
                    alignItems: "end",
                    "&:hover": {
                      background: "#22c3be",
                    },
                  }}
                >
                  Login
                </Button>
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
            <SocialLogins />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
