import React, { useEffect } from "react";
import { Typography, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";

const { Title, Paragraph } = Typography;

const index = () => {
    const GetLatestMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`
        );

        console.log(data);
    };

    useEffect(() => {
        GetLatestMovies();
    }, []);

    return (
        <div className="container mt-5 p-5 bg-light">
            <Title level={4}>Lorem ipsum dolor sit amet.</Title>
            <Paragraph type="success">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, at?
            </Paragraph>
            <Divider />
            <Input placeholder="default size" prefix={<UserOutlined />} />
        </div>
    );
};

export default index;
