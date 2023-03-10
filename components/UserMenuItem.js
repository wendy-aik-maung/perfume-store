import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const UserMenuItem = () => {
	const { user, error, isLoading } = useUser();
	const router = useRouter();

	// if not logged in
	if (!user) {
		return (
			<Link href="/api/auth/login" className="btn btn-sm">
				Login
			</Link>
		);
	}
	// if logged in
	return (
		<div
			onClick={() => router.push("/profile")}
			className="flex items-center gap-2 cursor-pointer">
			<Image
				className="w-6 h-6 rounded-full"
				src={user.picture}
				alt={user.name}
				width="32"
				height="32"
			/>
			<h3 className="text-xl text-bold">{user.name}</h3>
		</div>
	);
};

export default UserMenuItem;
