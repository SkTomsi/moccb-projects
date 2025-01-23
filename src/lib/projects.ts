import annayojana from "@/assets/annayojana.jpg";
import ashray from "@/assets/ashray.jpeg";
import counseling from "@/assets/counseling.webp";
import nutrition from "@/assets/nutrition.jpg";
import scholarship from "@/assets/scholarship.webp";
import sneha from "@/assets/sneha.jpeg";
import specialSchool from "@/assets/special-school.webp";
import tejaswini from "@/assets/tejaswini-school.jpg";
import trainingCenter from "@/assets/training-center.png";
import welfareCenter from "@/assets/welfare-center.jpeg";
import type { StaticImageData } from "next/image";

export interface Project {
	slug?: string;
	name: string;
	location: string;
	image?: StaticImageData;
	shortDescription: string;
	longDescription: string[];
}

export const projects: Project[] = [
	{
		slug: "ashray-bhavan",
		name: "MAR THEOPHILUS ASHRAYA BHAVAN",
		image: ashray,
		location: "Nerul, Navi Mumbai",
		shortDescription: "A care home for cancer patients & bystanders",
		longDescription: [
			"Understanding the needs of cancer patients, a shelter home was set up in Nerul, Navi Mumbai. This home offers accommodation, food, and support to around 600 patients annually who come to Mumbai for treatment.",
			"It is seen that many of the cancer patients who come to Mumbai from outstation are from a poor background. As a result, these patients and/ or the relatives accompanying them cannot afford a decent place to stay in Mumbai during the treatment period, as accommodation in Mumbai is very expensive. A large number of such people have no option but to live on roadside. By the grace of God, we could start a shelter home for such people in Navi Mumbai, on the 1st August 2019 viz., ‘Dr. Mar Theophilus Ashraya Bhavan’ at Row House No 28, Plot No 35, Nandanvan CHS, Sector 17, Nerul, Navi Mumbai. We are providing free food, accommodation and transportation to Tata Hospital, to a limited number of patients and their bystander relatives. Monthly expenses to run this project comes to around Rs. Two lakhs.  Rev. Fr. Benjamin Stephen is serving as the manager for this project.",
		],
	},
	{
		slug: "tejaswini-school",
		name: "TEJASWINI SCHOOL",
		location: "Vashi, Navi Mumbai",
		image: tejaswini,
		shortDescription:
			"School for the economically disadvantaged children from Turbhe slum, since 2004",
		longDescription: [
			"Operating since 2004 in Vashi, this school exemplifies our commitment to social justice in education. It provides high-quality English medium education up to SSC level for economically disadvantaged children from the Turbhe slum area. This includes free education, transport, uniforms, books, and even daily necessities like snacks.",
			"St. Mary’s Tejaswini School, started in 2004, has become a full-fledged school up to the 10th Std. and has a present strength of 391 students, from the Turbhe slum area.  As per the Education Department’s requirements, the school timing is 2.15 p.m. - 7.00 p.m.",
			"All the infrastructure facilities of St. Mary’s Multipurpose High School, Vashi are made available to these underprivileged children free of cost, including the TeachNext Smart Class facility (teaching with the help of LCD Projector, Computer and CD’s) which normally costs Rs. 34,100/- per student per annum for a regular student.",
			"Besides free education in English medium - transportation, school books, uniforms and one-time snacks are also provided free of cost. The aggregate expenditure per child per annum is Rs. 18750/- excluding Smart Class facility etc. More than Rs. 80 lakhs are being spent annually for this single project.",
		],
	},
	{
		slug: "annayojana",
		name: "ANNAYOJNA",
		location: "Vashi, Navi Mumbai",
		image: annayojana,
		shortDescription: "A lunch meal for bystanders of NMMC Hospital, Vashi",
		longDescription: [
			"Addressing the hunger faced by relatives accompanying patients at the Vashi Municipal hospital, this initiative offers free lunches and bottled water to about 150 individuals every Saturday. The aim is to expand this service to more days through increased sponsorship.",
			"Annayojana is a programme for providing free food for the patients and their bystanders at Municipal Hospital, Vashi. We started this project in the year 2017. Every Saturday we are providing 150 packets of food in the noon time with the financial support of our faithful. We express our sincere gratitude to our Vashi parish MGOCSM, OCYM and other church members for their sincere support as the volunteer team.",
		],
	},
	{
		slug: "nutrition-for-tb-afflicted-children",
		name: "NUTRITION for TB-AFFLICTED CHILDREN",
		location: "Turbhe, Navi Mumbai",
		image: nutrition,
		shortDescription:
			"Providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks",
		longDescription: [
			"Recognizing the high prevalence of TB-afflicted children in the Turbhe slum area, MOCCB initiated a scheme providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks to these children.",
			"The Diocese of Bombay has been running a Nutrition Program for children in the Turbhe area of Navi Mumbai since 2009. Turbhe, which is Navi Mumbai’s largest slum, many children who are unable to get a healthy, nutritional diet required for their growth and health. So, the Diocese decided to step in and provide a protein-rich diet of a glass of milk and a boiled egg to the children every morning.",
			"Initially, the target children were those affected by TB, organized with data and support received from the NNMC.",
			"In 2010, the MOCCB partnered with the Outreach Program of the Terana Hospital, Nerul, who identified the malnourished children of the area. On the recommendation of the doctors, children below 7 years of age were admitted to the Nutrition Program. Daily, more than 30 children were fed, and the doctors monitored the health and growth of these children.",
			"The target was to get the children to cross the required parameters of height, weight, and overall health. It was a good feeling when the children grew healthy and gained strength. This collaboration with the doctors went on smoothly and the MOCCB has successfully catered to 30 to 35 children daily. Unfortunately, due to Covid, the program had to be halted.",
			"In the years following COVID, from 2023, the MOCCB has restarted the Nutrition Program. This time, children are identified from the surrounding BAL VADIs. The program works in collaboration with teachers in charge who recommend children to participate. The target number of children for the program is 30 to 35.",
			"Apart from the daily supply of milk and eggs, donations of care packages containing household daily use items are occasionally distributed to the families of the children. Special thanks to Mrs. Junu Joseph for her dedicated service as the coordinator for the project.",
		],
	},
	{
		slug: "mar-alvares-sneha-sadan-clinic",
		name: "MAR ALVARES SNEHA SADAN CLINIC",
		location: "Sawantwadi, Maharashtra",
		image: sneha,
		shortDescription:
			"A clinic for all villagers and a medical van which travels to villages around.",
		longDescription: [
			"Recognizing the high prevalence of TB-afflicted children in the Turbhe slum area, MOCCB initiated a scheme providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks to these children.",
			"The Diocese of Bombay has been running a Nutrition Program for children in the Turbhe area of Navi Mumbai since 2009. Turbhe, which is Navi Mumbai’s largest slum, many children who are unable to get a healthy, nutritional diet required for their growth and health. So, the Diocese decided to step in and provide a protein-rich diet of a glass of milk and a boiled egg to the children every morning.",
			"Initially, the target children were those affected by TB, organized with data and support received from the NNMC.",
			"In 2010, the MOCCB partnered with the Outreach Program of the Terana Hospital, Nerul, who identified the malnourished children of the area. On the recommendation of the doctors, children below 7 years of age were admitted to the Nutrition Program. Daily, more than 30 children were fed, and the doctors monitored the health and growth of these children.",
			"The target was to get the children to cross the required parameters of height, weight, and overall health. It was a good feeling when the children grew healthy and gained strength. This collaboration with the doctors went on smoothly and the MOCCB has successfully catered to 30 to 35 children daily. Unfortunately, due to Covid, the program had to be halted.",
			"In the years following COVID, from 2023, the MOCCB has restarted the Nutrition Program. This time, children are identified from the surrounding BAL VADIs. The program works in collaboration with teachers in charge who recommend children to participate. The target number of children for the program is 30 to 35.",
			"Apart from the daily supply of milk and eggs, donations of care packages containing household daily use items are occasionally distributed to the families of the children. Special thanks to Mrs. Junu Joseph for her dedicated service as the coordinator for the project.",
		],
	},
	{
		slug: "mar-alvares-welfare-center-for-children",
		name: "MAR ALVARES WELFARE CENTRE FOR CHILDREN",
		location: "Kalamboli, Navi Mumbai",
		image: welfareCenter,
		shortDescription: "A space to empower children from streets & orphaned.",
		longDescription: [
			"The centre is aimed to support the underprivileged children namely, street children, orphans, pavement dwellers children and those from poor socio economic background from the surrounding areas.",
			"Mar Alvares Daya Bhavan Kalamboli is a new project of the Diocese of Bombay which is planning start a day care centre for the street children. The construction work of a 3 storied building was completed in the reporting year. The inauguration ceremony of the centre was done on 31st August 2023 by Mrs. Manda Mathre MLA and H. G. Geevarghese Mar Coorilos Metropolitan presided over the meeting. Many priests and faithful were attended the function.",
		],
	},
	{
		slug: "st-marys-training-center",
		name: "ST. MARY’S TRAINING CENTRE",
		location: "Turbhe, Navi Mumbai",
		image: trainingCenter,
		shortDescription:
			"Skills training unit for the women in Turbhe slum areas.",
		longDescription: [
			"The Diocese of Bombay has an Educational and Social Outreach programme in Turbhe, which is the largest slum area in Navi Mumbai. The main inhabitants are migrant workers from all over India.  The second generation living here are getting educated. In general, their income is very low as the majority fall under the class of daily wage earners.",
			"As an outreach programme of the Diocese, it funds a Training Centre which imparts skills and conducts classes to teach Embroidery, Cutting and Sewing and Mehendi Art to the less privileged women. They have a training period of 4 to 6 months, 2 hours daily, at a minimal fee of Rs 150/- per month. The money collected is spent on the materials required by them in the class. The coordinator, and both Instructors are from the neighbourhood, encouraging local leadership and as being examples of women from among them being able to be self-reliant.",
			"The target women are those who are not in a position, due to societal reasons, to leave the area to get this kind of training. Secondly, on completion of the course, they can work from their homes and earn a small income or even save income by stitching their own clothes and those of their family members. During their training, we try to get them some small orders to execute to give them a sense of worth as well as a small first income. On completion of their course, they are awarded a Certificate and a medal. The 2 hours that the women spend at the Centre, daily, also leads to a bonding among them, and support to each other even outside of the class, in the neighbourhood.",
			"The students are of varying ages. Range of 16 years to 40 years. We have had the privilege to reach out to more than a hundred students since inception, on 7th October 2021, the 72nd birthday of our beloved H.G. Geevarghese Mar Coorilos, Metropolitan Diocese of Bombay. Special thanks to Mrs. Junu Joseph for her dedicated service as the coordinator for the project.",
		],
	},
	{
		slug: "gregorian-special-school",
		name: "GREGORIAN SPECIAL SCHOOL",
		location: "Roha, Maharashtra",
		image: specialSchool,
		shortDescription:
			"To support children with determination for their developmental needs.",
		longDescription: [
			"An initiative of MOSC which seeks to find the beauty of children with determination Sponsor ₹ 2,00,000/- towards development of Sunday School curriculum",
			"Dedicated to the well-being of differently-abled youths, the Gregorian Special School serves children aged 6 to 18. The school operates under the guidance of capable special educators who provide tailored educational programs designed to meet the unique needs of each student.",
			"The school focuses on creating an inclusive environment that nurtures the potential of every student, offering specialized curricula, therapeutic interventions, and extracurricular activities aimed at holistic development.",
		],
	},
	{
		slug: "gregorian-care-center",
		name: "GREGORIAN CARE CENTER",
		location: "Roha, Maharashtra",
		image: sneha,
		shortDescription:
			"Catering to needs and care for old age residents, contributing to their well-being.",
		longDescription: [
			"Catering to needs and care for old age residents, contributing to their well-being",
			"Provides comfortable lodging, meals, medical assistance, and other amenities to its residents",
			"Sponsor an amount of ₹ 2,00,000/- towards a month expense or ₹ 15,000/- to care for 1 person a month.",
		],
	},
	{
		slug: "counselling-centres",
		name: "COUNSELLING CENTRES",
		location: "Coming soon",
		image: counseling,
		shortDescription:
			"Counselling clinics providing psychological care and support for community",
		longDescription: [
			"Counselling clinics providing psychological care and support for community",
		],
	},
	{
		slug: "education-aid-scholarship",
		name: "EDUCATION AID / SCHOLARSHIP",
		location: "Coming soon",
		image: scholarship,
		shortDescription:
			"Provide fees assistance for the financially weaker and academically excelling students.",
		longDescription: ["Sponsor ₹10,00,000/- towards the same for a year"],
	},
];
