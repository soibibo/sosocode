// import * as React from 'react'
// import PropTypes from 'prop-types'
// import Tabs from '@mui/material/Tabs'
// import Tab from '@mui/material/Tab'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props

//   return (
//     <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// }

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   }
// }

// export default function Portfolio() {
//   const [value, setValue] = React.useState(0)

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   return (
//     <div className="py-8 px-4 mx-auto max-w-screen-3xl sm:py-16 lg:px-6  bg-black">
//       <div className="max-w-screen-md mx-auto mb-8 lg:mb-16 ">
//         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center dark:text-white">Portfolio</h2>
//         <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here are services we offer</p>
//       </div>
//       <div className="container  mx-auto">
//         <Box className=" bg-neutral-900 rounded-xl" sx={{ flexGrow: 1, width: '100%', display: 'flex', height: 224 }}>
//           <Tabs
//             className="bg-soso-gray rounded-l-xl"
//             orientation="vertical"
//             variant="scrollable"
//             value={value}
//             // indicatorColor="primary"
//             TabIndicatorProps={{
//               style: {
//                 backgroundColor: '#ed955d',
//                 height: '50px',
//               },
//             }}
//             onChange={handleChange}
//             aria-label="Vertical tabs example"
//           >
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Web Application" {...a11yProps(0)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="UI/UX Design" {...a11yProps(1)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Item Three" {...a11yProps(2)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Item Four" {...a11yProps(3)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Item Five" {...a11yProps(4)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Item Six" {...a11yProps(5)} />
//             <Tab sx={{ '&.Mui-selected': { color: '#ed955d', fontWeight: 'bold' }, color: 'gray' }} label="Item Seven" {...a11yProps(6)} />
//           </Tabs>
//           <TabPanel className="containertext-white" value={value} index={0}></TabPanel>
//           <TabPanel className="text-white" value={value} index={1}>
//             Item Two
//           </TabPanel>
//           <TabPanel className="text-white" value={value} index={2}>
//             Item Three
//           </TabPanel>
//           <TabPanel className="text-white" value={value} index={3}>
//             Item Four
//           </TabPanel>
//           <TabPanel className="text-white" value={value} index={4}>
//             Item Five
//           </TabPanel>
//           <TabPanel className="text-white" value={value} index={5}>
//             Item Six
//           </TabPanel>
//           <TabPanel className="text-white" value={value} index={6}>
//             Item Seven
//           </TabPanel>
//         </Box>
//       </div>
//     </div>
//   )
// }

// import React from 'react'
// import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'

// export default function Portfolio() {
//   return (
//     <div className="flex w-full flex-col">
//       <Tabs aria-label="Options">
//         <Tab key="photos" title="Photos">
//           <Card>
//             <CardBody>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//               ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="music" title="Music">
//           <Card>
//             <CardBody>
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//               cillum dolore eu fugiat nulla pariatur.
//             </CardBody>
//           </Card>
//         </Tab>
//         <Tab key="videos" title="Videos">
//           <Card>
//             <CardBody>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
//           </Card>
//         </Tab>
//       </Tabs>
//     </div>
//   )
// }
