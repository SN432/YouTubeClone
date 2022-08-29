import Card from "./CardInfo";
const RightContent = () => {
  <Card />;
  return (
    <>
      {Card.map((i) => (
        <>
          <div>
            <div className="relative mt-5">
              <a href="https://youtu.be/0Gapzh2nvh4">
                <img
                  className="h-40 w-64 hover:contrast-50"
                  src={i.image}
                  alt=""
                  srcset=""
                />
              </a>
              <h4 className="absolute right-3 bottom-1 bg-gray-900 px-2 py-1 text-xs text-white ">
                4:30
              </h4>
            </div>
            <div className="flex mt-3">
              <div>
                <img
                  className="rounded-full h-12 w-12 mr-5 font-mono"
                  src={i.channelProfile}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="">
                <div className="text-lg font-mono">{i.title}</div>
                <div className="text-md text-gray-500 flex jsutify-start font-mono -mb-2">
                  {i.channel}
                </div>
                <div className="flex text-md items-center text-gray-500 font-mono">
                  <div>
                    <h4>{i.view}</h4>
                  </div>
                  <div className="text-xs ml-1">views</div>
                  <div className=" ml-1 mr-1">&#183;</div>
                  <div>
                    <h4>{i.period}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default RightContent;
