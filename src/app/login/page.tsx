"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center my-10 py-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex flex-col justify-center py-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-xs">
              <Image
                src="/happypets.png" // Replace with your image path
                alt="Inverted Image"
                width={150}
                height={150}
                className="mx-auto"
                style={{ filter: "invert(100%)" }}
              />

              <h2 className="mt-5 filter:invert(100%) text-center text-2xl font-bold leading-9 tracking-tight text-[#2F0601]">
                Login to your Account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-[#2F0601]"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      required
                      autoComplete="username"
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-[#2F0601]"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-[#2F0601] hover:text-red-600"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#2F0601] px-3 py-1.5 text-sm font-semibold leading-6 text-white  hover:bg-[#ad7f47] hover:bg-opacity-100 hover:text-[#2F0601]"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="../../../../../signup"
                  className="font-semibold leading-6 text-[#2F0601] hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
