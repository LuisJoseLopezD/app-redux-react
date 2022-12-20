import React from "react";
import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
const { Meta } = Card;

const Cardpokemon = () => {
    return (
        <>
            <Card
                style={{
                    marginTop: '1rem',
                    width: 150,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                title="card title"
                extra={<StarOutlined /> }
            >
                <Meta
                    description="description"
                />
            </Card>
        </>
    );
}

export default Cardpokemon;