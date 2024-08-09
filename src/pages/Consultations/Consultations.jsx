import "./Consultations.scss";
import Button from "../../components/Button/Button";

const Consultations = () => {
  return (
    <>
      <div className="consultation">
        <div className="consultation-hero">
          <img
            className="consultation-hero__image"
            src="../../../src/assets/images/consultation.png"
            alt=""
          />

          <p className="consultation-hero__info">
            Ready to take your business to the next level? Our expert
            consultants are here to help you navigate your industry’s challenges
            and explore new opportunities with cutting-edge AI solutions.
          </p>
          <p className="consultation-hero__info">
            Whether you're looking to enhance automation, dive into data
            analysis, or explore innovative AI technologies, our tailored
            consultations are designed to meet your unique needs.
          </p>
          <p className="consultation-hero__info">
            Schedule your consultation now and get personalized insights that
            will drive your business forward.
          </p>
        </div>
        <form id="consultation-form" className="form">
          <p className="form__title">Book Your Consultation Today</p>
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" required />

          <label htmlFor="contactPerson">Contact Person:</label>
          <input type="text" id="contactPerson" name="contactPerson" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="industry">Industry:</label>
          <input type="text" id="industry" name="industry" required />

          <label htmlFor="businessChallenges">Business Challenges:</label>
          <textarea
            id="businessChallenges"
            name="businessChallenges"
            rows="4"
            required
          ></textarea>

          <label htmlFor="aiInterestAreas">Areas of Interest:</label>
          <select id="aiInterestAreas" name="aiInterestAreas" multiple required>
            <option value="automation">
              Automation (e.g., streamlining tasks)
            </option>
            <option value="dataAnalysis">
              Data Analysis (e.g., understanding your data)
            </option>
            <option value="customerEngagement">
              Customer Engagement (e.g., improving interactions)
            </option>
            <option value="predictiveModeling">
              Predictive Modeling (e.g., forecasting trends)
            </option>
            <option value="naturalLanguageProcessing">
              Natural Language Processing (e.g., analyzing text)
            </option>
            <option value="imageRecognition">
              Image Recognition (e.g., interpreting visual data)
            </option>
          </select>

          <label htmlFor="preferredDateTime">
            Preferred Consultation Date/Time:
          </label>
          <select id="preferredDateTime" name="preferredDateTime" required>
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
            <option value="evening">Evening (3 PM - 6 PM)</option>
          </select>

          <label htmlFor="additionalNotes">Additional Notes/Questions:</label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            rows="4"
          ></textarea>
          <Button type="submit" text="Submit" className="form__button" onClick={() => console.log("clicked")} />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </>
  );
};

export default Consultations;
