import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getBookingLawyerStoredList,
  handelCancelfromDB,
} from "../../Utility/AddTODb";
import BookedLawyerData from "../../Componants/BookedLawyerData/BookedLawyerData";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Bounce, toast } from "react-toastify";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [lawyerdata, setlawyerData] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const booking = getBookingLawyerStoredList();
    const bookingLawyerList = data.filter((lawyer) =>
      booking.includes(lawyer.id)
    );

    setlawyerData(bookingLawyerList);
    console.log(lawyerdata);
  }, [data]);

  const handelCancel = (id) => {
    const lawyerUpdateList = lawyerdata.filter((lawyer) => lawyer.id !== id);
    setlawyerData(lawyerUpdateList);
    handelCancelfromDB(data.id);
    toast.error("Your Appointment Cenceled Already!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="">
      <div>
        <div className="mt-30 w-[100%] h-[400px]">
          <ResponsiveContainer>
            <BarChart
              width={1150}
              height={500}
              data={lawyerdata}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar
                dataKey="fees"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="my-30">
          {lawyerdata.map((lawyer) => (
            <BookedLawyerData
              key={lawyer.id}
              lawyer={lawyer}
              handelCancel={handelCancel}
            ></BookedLawyerData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
