"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import QuickStatistics from "./QuickStatistics";
import ComparisonGraph from "./ComparisonGraph";
import SyllabusAnalysis from "./SyllabusAnalysis";
import QuestionAnalysis from "./QuestionAnalysis";

export default function SkillTest() {
  const [isEditing, setIsEditing] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(85);
  const [correctScore, setCorrectScore] = useState(12);
  const [submissionDate, setSubmissionDate] = useState("");

  const handleSave = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    setSubmissionDate(new Date().toLocaleDateString());
  }, []);

  const handleCorrectScoreChange = (e) => {
    const value = Math.min(e.target.value, 15);
    setCorrectScore(value);
  };

  return (
    <div className="flex flex-col w-full lg:p-6 space-y-6">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
        <div className="w-full md:w-3/5 space-y-6">
          {/* Section 1 */}
          <div className="bg-white p-6 shadow rounded relative">
            {isEditing && (
              <div className="absolute inset-0 bg-white bg-opacity-50 flex justify-center items-center z-10">
                <div className="bg-white p-6 rounded shadow-lg w-3/4 sm:w-1/2">
                  <h2 className="text-lg md:text-2xl text-black flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className="text-orange-500"
                      size="2x"
                    />
                    <span>Update Scores</span>
                  </h2>
                  <form className="space-y-4 mt-24">
                    <div>
                      <label className="block text-sm text-black">
                        Update Your Rank
                      </label>
                      <input
                        type="number"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                        max={100}
                        className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-black">
                        Update Your Percentile
                      </label>
                      <input
                        type="number"
                        value={percentile}
                        onChange={(e) => setPercentile(e.target.value)}
                        min={0}
                        max={100}
                        className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-black">
                        Update Your Correct Score (out of 15)
                      </label>
                      <input
                        type="number"
                        value={correctScore}
                        onChange={handleCorrectScoreChange}
                        min={0}
                        max={15}
                        className="mt-1 block w-full border border-gray-300 rounded p-2 text-sm md:text-base"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-2 py-2 bg-red-500 text-white rounded text-sm md:text-base"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        className="px-2 py-2 bg-green-500 text-white rounded text-sm md:text-base"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="text-orange-500"
                  size="2x"
                />
                <h2 className="text-sm lg:text-md md:text-xl text-black font-bold">
                  Hyper Text Markup Language
                </h2>
              </div>

              <div className="flex flex-col lg:items-start mt-2 lg:mt-0">
                <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:items-start">
                  <p className="text-sm md:text-base text-gray-700">
                    Questions: 15
                  </p>
                  <div className="hidden lg:block border-l border-gray-700 h-5"></div>
                  <p className="text-sm md:text-base text-black">
                    Duration: 15 mins
                  </p>
                  <div className="hidden lg:block border-l border-gray-400 h-5"></div>
                  <p className="text-sm md:text-base text-black">
                    Submitted on: {submissionDate}
                  </p>
                </div>
              </div>

              <div className="flex lg:ml-auto justify-center mt-4 lg:mt-0">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded text-sm md:text-base"
                >
                  Edit Marks
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <QuickStatistics
            rank={rank}
            percentile={percentile}
            correctScore={correctScore}
          />

          {/* Section 3 */}
          <ComparisonGraph percentile={percentile} />
        </div>

        {/* Section 4 & Section 5 */}
        <div className="w-full md:w-2/5 space-y-6">
          <SyllabusAnalysis correctScore={correctScore} />
          <QuestionAnalysis correctScore={correctScore} />
        </div>
      </div>
    </div>
  );
}
