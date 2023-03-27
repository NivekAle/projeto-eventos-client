
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button, Checkbox, Form, Input } from 'antd';

import "./login.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

	const navigate = useNavigate();

	const onFinish = (values: any) => {
		console.log('Success:', values);
		navigate("/home");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-gray-200">
			<div className="h-82 w-[80%] bg-white">
				<div className="grid grid-cols-12">
					<div className="col-span-8">
						<img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
					</div>
					<div className="col-span-4">
						<div className="p-8">
							<h1 className="text-center text-4xl font-bold text-primary-500 mb-8">Login</h1>
							<p className="text-center text-lg text-gray-500 mb-4">
								Bem vindo ao maior sistema de Eventos!
							</p>
							<Form
								name="basic"
								labelCol={{ span: 24 }}
								wrapperCol={{ span: 24 }}
								style={{ maxWidth: 600 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								onFinishFailed={onFinishFailed}
								autoComplete="off"
								layout="vertical"
								className="mt-4"
							>
								<Form.Item
									label="Username"
									name="username"
									rules={[{ required: true, message: 'Please input your username!' }]}
								>
									<Input className="" />
								</Form.Item>

								<Form.Item
									label="Password"
									name="password"
									rules={[{ required: true, message: 'Please input your password!' }]}
								>
									<Input.Password />
								</Form.Item>

								<Form.Item wrapperCol={{ offset: 4, span: 12 }} >
									<Button type="primary" htmlType="submit">
										Entrar
									</Button>
								</Form.Item>
							</Form>
							<p className="my-4 text-center text-slate-400">
								OU
							</p>
							<p className="text-center text-slate-400">
								Novo por aqui? <a href="#" className="text-primary-500 hover:bg-primary-200">Registre-se</a>
								!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
