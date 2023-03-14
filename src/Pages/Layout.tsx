import { Avatar, Dropdown, Navbar, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";

type Props = {};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Layout = (props: Props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      console.log(windowDimensions.width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [active,setActive] = useState({
    seminar:false,
    selectCourse:false,
    selectExpert:false,
  })
  const currentUrl = window.location.href;
  return (
    <div className="overflow-x-hidden max-w-[100vw] ">
      <Navbar fluid={true} rounded={true} className="bg-gradient-to-r from-cyan-500 to-blue-500 absolute w-full z-[10]" >
        <Navbar.Brand href="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Expert Hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Abdul Hammad</span>
              <span className="block truncate text-sm font-medium">
                ghumanhammad420@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Homepage</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="lg:hidden">
          <Navbar.Link className={`${currentUrl.split('/')[3] === 'seminarbootcamp' && 'text-white rounded-full underline underline-offset-8 '}`} href="/seminarbootcamp">
            Seminar Bootcamp
          </Navbar.Link>
          <Navbar.Link className={`${currentUrl.split('/')[3] === 'searchcourses' && 'text-white rounded-full underline underline-offset-8 '}`} href="/searchcourses">Search Course</Navbar.Link>
          <Navbar.Link className={`${currentUrl.split('/')[3] === 'searchexperts' && 'text-white rounded-full underline underline-offset-8 '}`} href="/searchexperts">Search Experts</Navbar.Link>
          <Navbar.Link href="/navbars">Teachers</Navbar.Link>
          <Navbar.Link href="/navbars">Courses</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="w-full flex min-h-screen ">
        <Sidebar className="border-r-2 border-r-cyan-500 fixed"
          hidden={windowDimensions.width <= 1100 ? true : false}
          aria-label="Default sidebar example"      
        >
            <Sidebar.Logo href="/" img={"https://flowbite.com/docs/images/logo.svg"}>Expert Hub</Sidebar.Logo>
          <Sidebar.Items className="min-h-screen">
            <Sidebar.ItemGroup>
              <Sidebar.Item className={`${currentUrl.split('/')[3] === 'seminarbootcamp' && 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} href="/seminarbootcamp" icon={HiChartPie} onClick={()=>{setActive({
                selectCourse:false,selectExpert:false,seminar:true
              })}}>
                Seminar Bootcamps
              </Sidebar.Item>
              <Sidebar.Item className={`${currentUrl.split('/')[3] === 'searchcourses' && 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} href="/searchcourses" icon={HiViewBoards} onClick={()=>{setActive({
                selectCourse:true,selectExpert:false,seminar:false
              })}}>
                Search Course
              </Sidebar.Item>
              <Sidebar.Item className={`${currentUrl.split('/')[3] === 'searchexperts'&& 'bg-gradient-to-r from-cyan-500 to-blue-500'}`} href="/searchexperts" icon={HiInbox} label="3" onClick={()=>{setActive({
                selectCourse:false,selectExpert:true,seminar:false
              })
              console.log("hammad")}}>
                Search Experts
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Teachers
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={IoBookSharp}>
                Courses
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={GoSignOut}>
                Sign Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        <div className="absolute top-[62px] lg:left-[240px]  md:max-w-max max-w-[100vw] ">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
