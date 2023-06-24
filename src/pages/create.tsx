import { Gallery } from '@/components/gallery';
import { getCountriesFromDb } from '@/queries/getCountries';
import { ResortList } from '@/sections/resortList';
import { Country, Resort } from '@prisma/client';
import Head from 'next/head';
import React, { useState } from "react";
import Image from 'next/image';	
import Router from "next/router";


export default function Page({
	country_list
}: {
	country_list: Country[];
}) {

	const [name, setName] = useState("");
  	const [slug, setSlug] = useState("");
	const [image_url, setImage_url] = useState("");
	const [alert, setAlert] = useState(<div></div>)

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
		  const body = { name, slug, image_url };
		  setTimeout(function(){
			setAlert(<div className="opacity-0 z-50 fixed mt-10 mx-auto inset-x-0 w-2/12 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert"><div className="flex"><div><p className="font-bold">Country berhasil di insert</p></div></div></div>)
			},3000);
		  setAlert(<div className="opacity-100 z-50 fixed mt-10 mx-auto inset-x-0 w-2/12 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert"><div className="flex"><div><p className="font-bold">Country berhasil di insert</p></div></div></div>)
		  await fetch(`/api/post-prisma`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		  });
		  await Router.push("/create");
		} catch (error) {
		  console.error(error);
		}
	  };

	  const deleteData = async (slug: any) => {
		  try {
			const body = { slug };
			setTimeout(function(){
				setAlert(<div className="opacity-0 z-50 fixed mt-10 mx-auto inset-x-0 w-2/12 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert"><div className="flex"><div><p className="font-bold">Country berhasil di hapus</p></div></div></div>)
				},3000);
			  setAlert(<div className="opacity-100 z-50 fixed mt-10 mx-auto inset-x-0 w-2/12 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert"><div className="flex"><div><p className="font-bold">Country berhasil di hapus</p></div></div></div>)
			  await fetch(`/api/delete-prisma`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			  });
			  await Router.push("/create");
		  } catch (error) {
			console.error(error);
		  }
	  }

	return (
		<div>
			{alert}
			<div className="mt-24 w-2/3 mx-auto">
			<form  onSubmit={submitData}>
      		<div className="space-y-12">

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Insert Country</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
				  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
			<div className="sm:col-span-6">
              <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">
                Slug
              </label>
              <div className="mt-2">
                <input
				  onChange={(e) => setSlug(e.target.value)}
                  type="text"
                  name="slug"
                  id="slug"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
			<div className="sm:col-span-6">
              <label htmlFor="ImageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                Image Url
              </label>
              <div className="mt-2">
                <input
				  onChange={(e) => setImage_url(e.target.value)}
                  type="text"
                  name="ImageUrl"
                  id="ImageUrl"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    		</form>
			</div>

			<div className="w-2/3 mx-auto font-sans flex items-center justify-center bg-blue-darker w-full py-8">
                <div className="overflow-hidden bg-white rounded w-full shadow-lg  leading-normal">
					{country_list.map((country, index) => (
						<div key={index} className="block p-4 border-b flex justify-center items-center">
						<div className="flex-1">
                        <Image
									src={country.image_url}
									alt={country.name}
									width={110}
									height={80}
						/>
						<p className="font-bold text-lg mb-1 text-black group-hover:text-white">{country.name}</p>
						</div>
						<button onClick={()=> {deleteData(country.slug)}} className="rounded-full bg-red-500 h-8 px-4 text-white">Delete</button>
                    	</div>
					))}
                </div>
            </div>
		
		</div>
	);
}

export async function getServerSideProps() {
	const countries = await getCountriesFromDb();
	return {
		props: {
			country_list: countries,
		},
	};
}
