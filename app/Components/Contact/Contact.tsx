import Button from "../layout/Button";

const Contact = () => {
  return (
    <>
      <div className="container flex justify-between items-center p-20 mx-auto">
        <p className=" mx-24 text-left">
          If you require any further information, please feel free to contact
          me. It is a polite way to end your conversation with a client. It’s
          often given after having provided assistance to the other party and
          you are willing to help them again
        </p>
        <div className="flex mx-10 gap-4">
          <Button text={"Resume"} />
          <Button text={"Contact Now"} />
        </div>
      </div>
    </>
  );
};

export default Contact;
