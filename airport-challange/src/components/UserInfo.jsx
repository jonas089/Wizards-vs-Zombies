import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";

import '../css/UserInfo.css';


const UserInfo = (props) => {

    // the set state for various buttons
    const[visaLink,setVisaLink] = useState("");
    const[covidLink,setCovidLink] = useState("");
    const[documentLink,setDocumentLink] = useState("");
    const[firstName,setFirstName] = useState("");
    const[surname,setSurname] = useState("");
    const[email,setEmail] = useState("");
    const[country,setCountry] = useState("");
    const[street,setStreet] = useState("");
    const[city,setCity] = useState("");

  //******************************* */
  // set parameter for Visa
  //******************************* */
  const setVisa = (visaValue) => {
    // log the visa values
    console.log(visaValue);
    // set the parameter in the state
    setVisaLink(visaValue);
  }

  //******************************* */
  // set parameter for Covid
  //******************************* */
  const setCovid = (covidValue) => {
    // log the visa values
    console.log(covidValue);
    // set the parameter in the state
    setCovidLink(covidValue);
  }

  //******************************* */
  // set parameter for documents
  //******************************* */
  const setDocument = (documentValue) => {
    // log the visa values
    console.log(documentValue);
    // set the parameter in the state
    setDocumentLink(documentValue);
  }

  //******************************* */
  // set parameter for firstname
  //******************************* */
  const setFName = (firstnameValue) => {
    // log the visa values
    console.log(firstnameValue);
    // set the parameter in the state
    setFirstName(firstnameValue);
  }


  //******************************* */
  // set parameter for surname
  //******************************* */
  const setSName = (surnameValue) => {
    // log the visa values
    console.log(surnameValue);
    // set the parameter in the state
    setSurname(surnameValue);
  }

  //******************************* */
  // set parameter for country
  //******************************* */
  const setCountryValue = (countryValue) => {
    // log the visa values
    console.log(countryValue);
    // set the parameter in the state
    setCountry(countryValue);
  }

  //******************************* */
  // set parameter for email
  //******************************* */
  const setEmailValue = (emailValue) => {
    // log the visa values
    console.log(emailValue);
    // set the parameter in the state
    setEmail(emailValue);
  }

  //******************************* */
  // set parameter for street
  //******************************* */
  const setStreetValue = (streetValue) => {
    // log the visa values
    console.log(streetValue);
    // set the parameter in the state
    setStreet(streetValue);
  }

  //******************************* */
  // set parameter for city
  //******************************* */
  const setCityValue = (cityValue) => {
    // log the visa values
    console.log(cityValue);
    // set the parameter in the state
    setCity(cityValue);
  }

  //******************************* */
  // move the parameters to the main component
  //******************************* */
  const setUserMetadata = () => {
    // metadata from the parameters
    const userMetadata = {
      visaLink: visaLink,
      covidLink: covidLink,
      documentLink: documentLink,
      firstName: firstName,
      surname: surname,
      email: email,
      country: country,
      street: street,
      city: city
    }

    // call the function from the parent component
    props.setUserMetadata(userMetadata);
  }

  return (
    <>
    <div className='userWrapper'>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Travel instructions</h3>
            <p className="mt-1 text-sm text-gray-600">
              Those information are necessary to move through the airport seamlessly
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                {/* The Visa link */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Valid Visa
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="www.example.com"
                        value={visaLink}    // set up the connection to the visa
                        onChange={e => setVisa(e.target.value)} // put the changed values to the target
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Valid Covid Certification
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                        http://
                      </span>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="www.example.com"
                        value={covidLink}    // set up the connection to the visa
                        onChange={e => setCovid(e.target.value)} // put the changed values to the target
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Valid Passport/ID</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          className="sr-only" 
                          value={documentLink}    // 
                          onChange={e => setDocument(e.target.value)} //
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className='userWrapper'>
        <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
            <div className="border-t border-gray-200" />
        </div>
        </div>

        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                        </label>
                        <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={firstName}    // 
                        onChange={e => setFName(e.target.value)} //
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                        </label>
                        <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={surname}    // 
                        onChange={e => setSName(e.target.value)} //
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                        </label>
                        <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={email}    // 
                        onChange={e => setEmailValue(e.target.value)} //
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                        </label>
                        <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        value={country}    // 
                        onChange={e => setCountryValue(e.target.value)} //
                        >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        </select>
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
                        </label>
                        <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={street}    // 
                        onChange={e => setStreetValue(e.target.value)} //
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                        </label>
                        <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={city}    // 
                        onChange={e => setCityValue(e.target.value)} //
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                        </label>
                        <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                        </label>
                        <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Save
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>

    <div className='userWrapper'>
        <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
            <div className="border-t border-gray-200" />
        </div>
        </div>

        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
            </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div className="text-base font-medium text-gray-900" aria-hidden="true">
                        By Email
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="comments" className="font-medium text-gray-700">
                            Comments
                            </label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                        </div>
                        </div>
                        <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="candidates" className="font-medium text-gray-700">
                            Candidates
                            </label>
                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                        </div>
                        </div>
                        <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="offers" className="font-medium text-gray-700">
                            Offers
                            </label>
                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                        </div>
                        </div>
                    </div>
                    </fieldset>
                    <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                    <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                        <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                            Everything
                        </label>
                        </div>
                        <div className="flex items-center">
                        <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                            Same as email
                        </label>
                        </div>
                        <div className="flex items-center">
                        <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                            No push notifications
                        </label>
                        </div>
                    </div>
                    </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    Save
                    </button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </div>
    <div className='NFTicketButtonContainer'>
      <Link to='/mint'style={{ textDecoration: 'none' }}>
        <div className='createNFTicket'
        onClick={() => setUserMetadata()}>
            Accept and Mint NFTicket
        </div>
      </Link>
    </div>
  </>
  )
}

export default UserInfo