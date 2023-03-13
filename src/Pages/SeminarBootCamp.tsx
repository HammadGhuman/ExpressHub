import { Button, Carousel, Checkbox, Label, TextInput } from "flowbite-react";
type Props = {};

const SeminarBootCamp = (props: Props) => {
  return (
    <div className="w-full pr-5">
    <h1 className="text-5xl text-center font-semibold mt-3">Seminar Bootcamp</h1>
    <div className="flex flex-row space-x-5 mt-9">  
      <div className="bg-gray-300 w-full px-3 py-4 ml-2 rounded-lg">
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
          <Button type="submit">Submit</Button>
        </form>
      </div>
    <div className="w-full relative"> 

   
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img
      src="https://images.pexels.com/photos/4763639/pexels-photo-4763639.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/6858664/pexels-photo-6858664.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/15733527/pexels-photo-15733527.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      alt="..."
    />
    <img
      src="https://images.pexels.com/photos/13742140/pexels-photo-13742140.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
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
