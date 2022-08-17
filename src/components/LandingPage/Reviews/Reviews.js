// // import React from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import image1 from "../../../assets/images/image_2.jpg";

// // const Reviews = () => {
// //   return (
// //     <div>
// //       <Carousel>
// //         <div>
// //           <p className="legend">Legend 1</p>
// //         </div>
// //         <div>
// //           <p className="legend">Legend 2</p>
// //         </div>
// //         <div>
// //           <p className="legend">Legend 3</p>
// //         </div>
// //       </Carousel>
// //     </div>
// //   );
// // };

// // export default Reviews;

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";

// import IconButton from "@mui/material/IconButton";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import { Grid } from "@mui/material";
// // import bg1 from "../../assets/images/portfolioRed.png";
// // import bg2 from "../../assets/images/portfolioYellow.png";
// // import bg3 from "../../assets/images/portfolioBlue.png";
// // import bg4 from "../../assets/images/portfolioOrange.png";

// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     title: "Live Sports Stream app",
//     label:
//       "Live Sport Stream App is a sport streaming app where you can watch thousands of live events and shows from the networks plus get scores, on-demand news, highlights, and expert analysis. Subscribe to the streaming service for live sports, exclusive originals, premium articles, fantasy tools, and more.",
//   },
//   {
//     title: "ECMT Weaks website",
//     label:
//       "ECMT Weaks is a Schedule maintenance services, diagnostics or repairs at your own convenience. Simply enter your zip code, year, make and model of your car and you’re on your way to a hassle free car repair experience. One stop shop for all your car maintenance needs. Track your car repair appointment from booking to completion.",
//   },
//   {
//     title: "Airline",
//     label:
//       "A airline booking system with power search. A place where users can plan, book and keep track of their reservations with a great ease. Admin can manage all the bookings and schedule flights for the users.",
//   },
//   {
//     title: "IBO APP",
//     label:
//       "IBO App is a Tv Streaming App With this you can watch Live TV, Movies, Series, and TV CatUp from IPTV Service Provider on Android Phone, Android Boxes, Fire TV Sticks, Nvidia Shield TV.",
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box

//     >
//       <Grid
//         container
//         sx={{
//           pt: { xs: 7, sm: 5, md: 2, lg: 2 },
//           pb: { xs: 2, sm: 5, md: 2, lg: 2 },
//           background: "#F8F8F8",
//         }}
//         display="flex"
//         flexDirection={"row"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Grid
//           item
//           md={6}
//           xs={12}
//           sm={6}
//           sx={{ height: "100%" }}
//           display={"flex"}
//           alignItems={"center"}
//           justifyContent={"center"}
//         >
//           <Box width={"50%"}>
//             <AutoPlaySwipeableViews
//               axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//               index={activeStep}
//               onChangeIndex={handleStepChange}
//               enableMouseEvents
//             >
//               {images.map((step, index) => (
//                 <div key={step.label}>
//                   {Math.abs(activeStep - index) <= 2 ? (
//                     <Box display="flex">
//                       <Box
//                         component="img"
//                         sx={{
//                           //   height: 255,
//                           display: "block",
//                           maxWidth: 400,
//                           overflow: "hidden",
//                           width: "100%",
//                           objectFit: "cover",
//                           pb: { lg: 3 },
//                         }}
//                         src={step.imgPath}
//                         alt={step.label}
//                       />
//                     </Box>
//                   ) : null}
//                 </div>
//               ))}
//             </AutoPlaySwipeableViews>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           md={6}
//           xs={8}
//           sx={{ pt: { xs: 3, height: "100%" } }}
//           sm={6}
//           display="flex"
//           flexDirection={"column"}
//           justifyContent={"flex-start"}
//           alignItems={"center"}
//         >
//           <Box width="100%">
//             <Box
//               sx={{
//                 height: { md: "90px", sm: "130px", xs: "100%" },
//                 width: { md: "80%", xs: "100%", sm: "80%" },
//                 mb: { lg: 5, xs: 2 },
//               }}
//             >
//               <Paper
//                 square
//                 elevation={0}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   // height: 50,
//                   pl: 2,
//                   // bgcolor: '#F8F8F8',
//                   flexDirection: "column",
//                   background: "#F8F8F8",
//                 }}
//               >
//                 <Grid container>
//                   <Grid item xs="12">
//                     <Typography
//                       sx={{
//                         fontSize: {
//                           lg: "25px",
//                           md: "20px",
//                           sm: "18px",
//                           xs: "16px",
//                         },
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {images[activeStep].title}
//                     </Typography>
//                   </Grid>
//                   <Grid item xs="12">
//                     <Typography
//                       className={classes.detail}
//                       sx={{
//                         fontSize: { md: "17px", sm: "16px", xs: "13px" },
//                         color: "gray",
//                         minHeight: { xs: "50px" },
//                       }}
//                     >
//                       {images[activeStep].label}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </Box>
//             <Box
//               sx={{
//                 width: { lg: "50%", md: "50%", xs: "100%" },
//                 mt: { lg: 8, xs: 0, sm: 7 },
//               }}
//             >
//               <MobileStepper
//                 steps={maxSteps}
//                 position="static"
//                 activeStep={activeStep}
//                 sx={{ background: "#F8F8F8" }}
//                 nextButton={
//                   <IconButton
//                     color="secondary"
//                     size="small"
//                     onClick={handleNext}
//                     disabled={activeStep === maxSteps - 1}
//                   >
//                     <>
//                       {/* <Paper
//                       // sx={{
//                       //   borderRadius: "50%",
//                       //   border: "1px solid #780ada",
//                       //   p: 1,
//                       // }}
//                       elevation={3}
//                     > */}
//                       {theme.direction === "rtl" ? (
//                         <ArrowForwardIosIcon
//                           style={{
//                             fill: "#8300F8",
//                             background: "white",
//                             borderRadius: "50%",
//                             border: "2px solid #8300F8",
//                             fontSize: "40px",
//                             padding: "5px 15px",

//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "end",
//                           }}
//                         />
//                       ) : (
//                         <ArrowForwardIosIcon
//                           style={{
//                             fill: "#8300F8",
//                             background: "white",
//                             borderRadius: "50%",
//                             border: "2px solid #8300F8",
//                             fontSize: "40px",
//                             padding: "5px 8px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "end",
//                           }}
//                         />
//                       )}
//                       {/* </Paper> */}
//                     </>
//                   </IconButton>
//                 }
//                 backButton={
//                   <IconButton
//                     color="secondary"
//                     size="small"
//                     onClick={handleBack}
//                     disabled={activeStep === 0}
//                   >
//                     <>
//                       {" "}
//                       {/* <Paper
//                       // sx={{
//                       //   borderRadius: "50%",
//                       //   border: "1px solid #780ada",
//                       //   p: 1,
//                       // }}
//                       elevation={2}
//                     > */}
//                       {theme.direction === "rtl" ? (
//                         <ArrowBackIosIcon
//                           style={{
//                             fill: "#8300F8",
//                             background: "white",
//                             borderRadius: "50%",
//                             border: "2px solid #8300F8",
//                             fontSize: "40px",
//                             padding: "5px",
//                             paddingLeft: "12px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "end",
//                           }}
//                         />
//                       ) : (
//                         <ArrowBackIosIcon
//                           style={{
//                             fill: "#8300F8",
//                             background: "white",
//                             borderRadius: "50%",
//                             border: "2px solid #8300F8",
//                             fontSize: "40px",
//                             padding: "5px",
//                             paddingLeft: "12px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "end",
//                           }}
//                         />
//                       )}
//                       {/* </Paper> */}
//                     </>
//                   </IconButton>
//                 }
//               />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;
