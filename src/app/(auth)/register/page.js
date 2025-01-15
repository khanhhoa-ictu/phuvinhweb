"use client";
import { handleErrorMessage } from "@/common";
import { register } from "@/service/auth";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      await register(values);
      router.push("/");
    } catch (error) {
      handleErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#f7f7f7] min-h-[100vh] flex items-center justify-center flex-col">
      <div className="bg-white p-[46px] min-w-[330px] md:min-w-[420px] rounded-t-lg">
        <Form onFinish={handleLogin} className="">
          <Form.Item
            name="email"
            rules={[
              {
                validator: (_, value) =>
                  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Please enter a valid email address!"),
                      ),
              },
            ]}
          >
            <Input placeholder="Enter email" className="!h-[40px]" />
          </Form.Item>
          <Form.Item name="password">
            <Input
              type="password"
              placeholder="Enter password"
              className="!h-[40px]"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="w-full !h-[40px]"
              htmlType="submit"
              loading={loading}
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
