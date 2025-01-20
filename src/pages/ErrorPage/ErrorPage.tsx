import React from 'react'
import * as ReactRouter from 'react-router-dom'

const base = '/'

const ErrorPage = () => (
  <div className="flex flex-co p-4">
    <div className="flex justify-center content-center"></div>
    <div className="flex justify-center content-center mb-4 text-3xl">
      functionality Not Available
    </div>
    <div className="flex justify-center content-center mb-8 text-center">
      functionality Not Available Description
    </div>
    <div className="flex justify-center content-center">
      <div className="mr-6">
        <ReactRouter.Link to={base}>
          <button type="button" className="flex py-2 px-4 bg-gray-400 rounded">
            components.back
          </button>
        </ReactRouter.Link>
      </div>
      <div>
        <ReactRouter.Link to={base}>
          <button
            type="button"
            className="py-2 px-4 text-white bg-red-600 rounded"
          >
            go away
          </button>
        </ReactRouter.Link>
      </div>
    </div>
  </div>
)

export default ErrorPage
