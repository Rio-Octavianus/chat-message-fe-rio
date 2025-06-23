import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Image from "../../assets/Image/Man.png";
import Input from "../../components/Input/Input";

const Chat = () => {
  const contacts = [
    {
      name: "Agung",
      status: "Online",
      img: Image,
    },
    {
      name: "Budi",
      status: "Online",
      img: Image,
    },
    {
      name: "Tarno",
      status: "Online",
      img: Image,
    },
    {
      name: "Dicky",
      status: "Online",
      img: Image,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[30%] border border-black h-screen bg-[#d1fae5]">
        <div className="grid grid-cols-2 my-8 m-12 -space-x-1">
          <h1 className="text-3xl font-bold">CHAT</h1>
          <SearchBox />
        </div>
        <hr class="border-gray-400 border-t-2" />
        <div className="mx-6 mt-2 ">
          <div className="text-lg font-bold">Messages</div>
          <div>
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-500">
                  <div className="cursor-pointer flex items-center">
                    <div>
                      <img src={img} width={75} height={75} />
                    </div>
                    <div className="ml-8">
                      <h3 className="text-lg font-semibold">{name}</h3>
                      <p className="text-sm font-light text-gray-500">
                        {status}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[70%] h-screen bg-[#dcfce7] flex flex-col items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-12 rounded-full flex item-center px-12">
          <div className="cursor-pointer mt-2">
            <img src={Image} width={60} height={60} />
          </div>
          <div className="ml-2 mt-3 mr-auto">
            <h3 className="text-lg font-semibold">Agung</h3>
            <p className="text-sm font-light text-gray-500">Online</p>
          </div>
          <div className="cursor-pointer mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll border-b shadow-sm">
          <div className="h-[1000px] p-14">
            <div className="max-w-[40%] bg-[#f0fdf4] rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-md">
              Apa kabar ?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6 shadow-md">
              Aku baik, kabarmu gimana ?
            </div>
            <div className="max-w-[40%] bg-[#f0fdf4] rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-md">
              Apa kabar ?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6 shadow-md">
              Aku baik, kabarmu gimana ?
            </div>
            <div className="max-w-[40%] bg-[#f0fdf4] rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-md">
              Apa kabar ?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6 shadow-md">
              Aku baik, kabarmu gimana ?
            </div>
            <div className="max-w-[40%] bg-[#f0fdf4] rounded-b-xl rounded-tr-xl p-4 mb-6 shadow-md">
              Apa kabar ?
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6 shadow-md">
              Aku baik, kabarmu gimana ?
            </div>
          </div>
        </div>
        <div className="p-12 w-full flex items-center">
          <Input
            placeholder="Type a message..."
            className="w-[95%] mr-6"
            inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-0"
          />
          <div className="mr-6 mt-1 p-1 cursor-pointer bg-secondary rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
            </svg>
          </div>
          <div className="mr-2 mt-1 p-1 cursor-pointer bg-secondary rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
