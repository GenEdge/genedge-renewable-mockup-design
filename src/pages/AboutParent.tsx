
import React from 'react';
import Layout from '../components/Layout';

const AboutParent = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Parent Company</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-700">
              EFSPL offers complete solutions in Natural Gas Sourcing, Contract Management, Formulation and Management of 
              Gas Sales Agreement (GSA) & Gas Transmission Agreement (GTA), Regulatory Affairs Management, DFR Preparation, 
              Project Financing, setting up City Gas Distribution (CGD) Network etc.
            </p>
            
            <p className="mb-6 text-gray-700">
              EFSPL also offers gas sourcing solutions to customers who are not connected to pipeline through virtual pipeline 
              using innovative methods like LNG by truck and transportation of compressed gas through cascades.
            </p>
            
            <p className="mb-6 text-gray-700">
              At EFSPL, we are proud to expand into the thriving sector of renewable energy, marking a significant milestone 
              in our journey towards a sustainable future. With a legacy built on excellence in natural gas trading, we are now 
              leveraging our expertise to embrace the burgeoning opportunities in solar and wind energy generation.
            </p>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Expansion into Renewable Energy</h3>
              <p className="text-gray-700">
                Through Genedge Renewables, EFSPL is committed to driving the transition to clean energy while maintaining 
                the same standards of excellence, reliability, and customer service that have defined our natural gas business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutParent;
