import { Button, Carousel, Checkbox, Label, TextInput } from "flowbite-react";
type Props = {};

const SeminarBootCamp = (props: Props) => {
  return (
    <div className="lg:w-[80vw] lg:mx-[30px] w-[100vw]  pr-5 ">
    <h1 className="text-5xl text-cyan-500 text-center font-semibold mt-3">Seminar Bootcamp</h1>
    <div className="flex flex-col lg:flex-row  lg:space-x-5 lg:space-y-0 space-y-5 mt-9">  
      <div className="bg-gradient-to-r from-cyan-500 to bg-blue-500 w-full  px-3 py-4 ml-2 rounded-lg">
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
              <Label htmlFor="degree" value="Your Degree" />
            </div>
            <TextInput id="degree" type="text" placeholder="Software Engineering" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="seminar" value="Seminar Date" />
            </div>
            <TextInput id="seminar" type="date" required={true} />
          </div>
          <Button className="bg-gradient-to-r from-violet-500 to-purple-800-500 hover:bg-gradient-to-l transition hover:scale-100 scale-95" type="submit">Submit</Button>
        </form>
      </div>
    <div className="w-full relative"> 

   
        <div className="h-56 sm:h-64 xl:h-[320px] 2xl:h-96 ">
  <Carousel slideInterval={5000}>
    <img
      src="https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/8199610/pexels-photo-8199610.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/5428148/pexels-photo-5428148.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="..."
    />
  </Carousel>
  <Button  outline={true}
      gradientDuoTone="cyanToBlue" className="left-[40%] w-28 absolute bottom-20">
      Register
    </Button>

</div>
    </div>
    </div>
    </div>
  );
};

export default SeminarBootCamp;
