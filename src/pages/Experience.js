import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="Experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MCA, at Uttar Pradesh Technical University
          </h3>

          <p>Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Internship, at Great Learning
          </h3>

          <p>Digital Marketing Internship</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Currently"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digital Marketing Specialist, at Invincible Digital Pvt Ltd
          </h3>

          <p>
            {" "}
            <b> Paid Campaigns</b>
          </p>
          <p>
            ● Manage day-to-day operations of Paid Ads accounts, including
            account setup and optimization on Google Ads, Bing, Facebook and
            other platforms
          </p>
          <p>
            ● Create reports for management on key metrics such as revenue
            generated by each client and campaign performance
          </p>
          <p>
            ● Work with the marketing team to create and launch new campaigns,
            resulting in a 25% increase in conversion rate
          </p>
          <p>
            ● Ad Copies (Headlines, Description, Caption, CTAs & images)for Paid
            platform
          </p>
          <p>
            ● Conduct keyword research and monitor performance of search terms
            on Paid Ads for optimal results
          </p>
          <p>
            ● Collaborate with SEO team to ensure that landing pages are
            optimized for conversions
          </p>
          <p>● Competitor Analysis</p>
          <p>
            ● Site Analysis, improving site, suggesting relevant contents,
            proper keyword targeting.
          </p>
          <p>● Conversion Tracking using GA & GTM.</p>
          <p>
            ● Making changes on website/landing pages - By Using Html, CSS,
            javascript & WordPress editor like elementor and WPbakery
          </p>

          <p>
            <b> Campaigns</b>
          </p>
          <p>● Managed on-site and off-site SEO</p>
          <p>
            ● Performed full keyword research and developed related strategies
          </p>
          <p>
            ● Determined KPIs for each recommendation, forecast impact, and
            created case studies
          </p>
          <p>
            ● Performed SEO audits & presented recommendations to site owners●
            SEO performance reporting and dashboards
          </p>
          <p>
            ● Utilized Google Analytics, Search Console, MS-excel, data studio,
            SEMrush, Ahref, & GTM.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Certifcations</h3>

          <p>
            ● Udemy Certified React Js Developer.
          </p>

          <p>
            ● Wordpress - Website Development Course at Udemy.
          </p>
          <p>
            ● Google Ads - Google.
          </p> 

          <p>
            ● Google Analytics - Google.
          </p> 

          <p>
            ● Google Digital Unlocked - Google.
          </p> 

        </VerticalTimelineElement>

       
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
