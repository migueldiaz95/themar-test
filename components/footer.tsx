import { NextComponentType } from "next";

export const Footer: NextComponentType = () => {
    return (
      <footer className="p-4 rounded-lg md:flex md:items-center md:justify-between md:p-6 text-center m-10">
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0 justify-center">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Why we build this</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQ</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Roadmap</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Security</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Legal</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Twitter</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Discord</a>
          </li>
      </ul>
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Themarsolutions</a>. All Rights Reserved.
      </span>
    </footer>
    )
}