import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

type Props = {};
const courseData = [
    {
      courseImage:
        "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=500",
      courseName: "Introduction to Cyber Security lorem20 1231 sadasjdhajkshd",
      courseLevel: "Beginner",
      courseDescription:
        "This Course is Totaly beginner friendly no need of prior knowledge",
      instructor: "Aman Nadeem",
      price:"$13.99"
    },
    {
      courseImage:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      courseName: "Introduction to BlockChain And Cryptography",
      courseLevel: "Beginner",
      courseDescription:
        "This Course is Totaly beginner friendly no need of prior knowledge",
      instructor: "Abdul Hammad",
      price:"$12.99"
    },
    {
      courseImage:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      courseName: "Introduction to BlockChain And Cryptography",
      courseLevel: "Beginner",
      courseDescription:
        "This Course is Totaly beginner friendly no need of prior knowledge",
      instructor: "Abdul Hammad",
      price:"$12.99"
    },
    {
      courseImage:
        "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=400",
      courseName: "Introduction to BlockChain And Cryptography",
      courseLevel: "Beginner",
      courseDescription:
        "This Course is Totaly beginner friendly no need of prior knowledge",
      instructor: "Abdul Hammad",
      price:"$12.99"
    },
  ];




   

const SearchExperts = (props: Props) => {
    return (
      <div className="mr-24 w-full">
        <h1 className="text-5xl text-center font-semibold mt-3">Search Experts</h1>
        <div className="flex flex-col justify-center items-center w-full  space-x-5 mt-9">
          <div className="bg-gray-300 min-w-[500px] px-3 py-4 ml-2 rounded-lg">
          <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="interest" value="Your Interest" />
            </div>
            <TextInput
              id="interest"
              type="text"
              placeholder="Data Science"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="courseName" value="Your Course" />
            </div>
            <TextInput id="courseName" type="text" required={true} placeholder="Data Structures" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Course Description" />
            </div>
            <TextInput id="description" type="text" required={true} placeholder="Eg. Beginner Level" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="degree" value="Your Degree" />
            </div>
            <TextInput id="degree" type="text" required={true} placeholder="Software Engineering" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Experience" value="Your Experience" />
            </div>
            <TextInput id="Experience" type="number" required={true} placeholder="5" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-3">
          {courseData.map(item=>(
              <div className="w-full">
              <div className="max-w-sm ">
                <Card
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={item.courseImage}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.courseName}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.courseDescription}
                  </p>
                  <p>Level : {item.courseLevel}</p>
                  <p>Instuctor : {item.instructor}</p>
                  <p>Price : {item.price}</p>
                </Card>
              </div>
            </div>
          ))}
          </div>
         
        </div>
      </div>
    );
  };
  
  export default SearchExperts;
  