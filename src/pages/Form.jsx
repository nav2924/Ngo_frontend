import React, { useState } from "react";
import backIcon from "/public/backbutton.png"; // ✅ correct import

export default function Form() {
  const [formData, setFormData] = useState({
    dateOfCamp: "",
    targetGroup: "",
    wardNo: "",
    habitation: "",
    projectResponsible: "",
    medicineType: "",
    specialisation: "",
    organiser: "",
    doctors: "",
    gda: "",
    beneficiaries: "",
    findings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted ✅", formData);
    alert("Form submitted!");
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="bg-[#f1e9df] min-h-screen font-sans relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-10 left-10 w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
      >
        <img src={backIcon} alt="Back" className="w-[60%] h-[60%] object-contain" />
      </button>

      <div className="max-w-[1200px] mx-auto px-6 pt-[230px] relative">
        <h1 className="absolute text-[15.5rem] font-bold text-white top-[-80px] left-20 -z-10 sm:text-[8rem] sm:top-[-40px] sm:left-5">
          Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-transparent p-10 rounded-xl text-center"
        >
          {/* Row 1 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Date of Camp</label>
              <input
                type="date"
                name="dateOfCamp"
                value={formData.dateOfCamp}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Target Group</label>
              <select
                name="targetGroup"
                value={formData.targetGroup}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              >
                <option value="">-- Select --</option>
                <option>Children</option>
                <option>Women</option>
                <option>Elderly</option>
                <option>General</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Ward No</label>
              <input
                type="number"
                name="wardNo"
                value={formData.wardNo}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Habitation</label>
              <input
                type="text"
                name="habitation"
                value={formData.habitation}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Project Responsible</label>
              <input
                type="text"
                name="projectResponsible"
                value={formData.projectResponsible}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Organiser</label>
              <input
                type="text"
                name="organiser"
                value={formData.organiser}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Specialisation</label>
              <input
                type="text"
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Medicine Type</label>
              <select
                name="medicineType"
                value={formData.medicineType}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              >
                <option value="">-- Select --</option>
                <option>Allopathy</option>
                <option>Homeopathy</option>
                <option>Ayurveda</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">No. of Doctors</label>
              <input
                type="number"
                name="doctors"
                value={formData.doctors}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">No. of GDA</label>
              <input
                type="number"
                name="gda"
                value={formData.gda}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
          </div>

          {/* Row 6 */}
          <div className="flex flex-wrap gap-12 mb-8">
            <div className="flex flex-col gap-2 min-w-[280px] flex-1 text-left">
              <label className="font-serif font-bold text-lg">Total Beneficiaries</label>
              <input
                type="number"
                name="beneficiaries"
                value={formData.beneficiaries}
                onChange={handleChange}
                className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg focus:border-black/70"
              />
            </div>
          </div>

          {/* Findings */}
          <div className="flex flex-col gap-2 text-left mb-8">
            <label className="font-serif font-bold text-lg">Major Findings</label>
            <textarea
              name="findings"
              rows="4"
              value={formData.findings}
              onChange={handleChange}
              className="w-full border-b border-black/30 bg-transparent outline-none py-3 text-lg min-h-[120px] resize-none focus:border-black/70"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right sm:text-center">
            <button
              type="submit"
              className="bg-black text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-white hover:text-black transition transform hover:scale-105"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
