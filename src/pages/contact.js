import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Contact = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		toast.success(`Dear ${data?.name}, your Feedback is successfully sent!`, {
			duration: 3000,
		});
	};

	return (
		<main className="w-1/2 p-4 glass border rounded-2xl shadow-xl">
			<div className="text-2xl text-bold text-neutral text-center">
				We value our customers&apos; feedback.
			</div>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Label>
						Name{" "}
						<span
							style={{
								color: "red",
								marginLeft: "3px",
							}}>
							*
						</span>
					</Label>
					<Input
						autoFocus
						{...register("name", {
							required: "This field is required",
							message: "This field is required",
						})}
						aria-invalid={errors.name ? "true" : "false"}
						type="text"
						className="input input-bordered input-primary w-full max-w-xs"
					/>
					{errors.name && <Error>{errors?.name?.message}</Error>}
					<Label>
						Email{" "}
						<span
							style={{
								color: "red",
								marginLeft: "3px",
							}}>
							*
						</span>
					</Label>
					<Input
						autoFocus
						{...register("email", {
							required: "This field is required",
							message: "This field is required",
						})}
						aria-invalid={errors.email ? "true" : "false"}
						type="text"
						className="input input-bordered input-primary w-full max-w-md"
					/>
					{errors.email && <Error>{errors?.email?.message}</Error>}
					<Label>
						Any Comment?{" "}
						<span
							style={{
								color: "red",
								marginLeft: "3px",
							}}>
							*
						</span>
					</Label>
					<Input
						{...register("feedback", {
							required: "This field is required",
							message: "This field is required",
						})}
						aria-invalid={errors.feedback ? "true" : "false"}
						type="textarea"
						row="3"
						className="input input-bordered input-primary w-full max-w-xs bg-none"
					/>
					{errors.feedback && <Error>{errors?.feedback?.message}</Error>}
					<Footer>
						<button type="submit" className="edit-btn w-full bg-neutral">
							Send
						</button>
					</Footer>
				</form>
			</Container>
		</main>
	);
};

export default Contact;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem;
	textarea {
		resize: none;
	}
`;
const Label = styled.div`
	font-weight: 400;
	font-size: 16px;
	margin-bottom: 5px;
	color: #000;
`;
const Input = styled.input`
	flex: 1;
	width: 100%;
	font-size: 0.95rem;
	border-radius: 6px;
	margin-bottom: 0.5rem;
	&:focus {
		outline: none;
	}
`;
const Footer = styled.div`
    font-size: 13px;
    display: flex;
    justify-content: center;
	margin-top: 2rem;
    }
    .edit-btn {
      font-weight: 400;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: #fff;
      margin: auto;
      cursor: pointer;
      :hover {
        background: #404040;
      }
    }
  `;
const Error = styled.span`
	color: red;
	display: flex;
	align-items: center;
	justify-content: baseline;
	gap: 0 6px;
	font-size: 12px;
	padding-top: 0;
	margin-top: 0;
`;
