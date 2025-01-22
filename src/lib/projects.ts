import annayojana from "@/assets/annayojana.png";
import ashray from "@/assets/ashray.png";
import nutrition from "@/assets/nutrition.png";
import sneha from "@/assets/sneha.png";
import tejaswini from "@/assets/tejaswini-school.png";
import trainingCenter from "@/assets/training-center.png";
import specialSchool from "@/assets/special-school.png"
import type { StaticImageData } from "next/image";

export interface Project {
	name: string;
	location: string;
	image?: StaticImageData;
	shortDescription: string;
	longDescription: string;
}

export const projects: Project[] = [
	{
		name: "MAR THEOPHILUS ASHRAYA BHAVAN",
		image: ashray,
		location: "Nerul, Navi Mumbai",
		shortDescription: "A care home for cancer patients & bystanders",
		longDescription:
			"Understanding the needs of cancer patients, a shelter home was set up in Nerul, Navi Mumbai. This home offers accommodation, food, and support to around 600 patients annually who come to Mumbai for treatment.",
	},
	{
		name: "TEJASWINI SCHOOL",
		location: "Vashi, Navi Mumbai",
		image: tejaswini,
		shortDescription:
			"School for the economically disadvantaged children from Turbhe slum, since 2004",
		longDescription:
			"Operating since 2004 in Vashi, this school exemplifies our commitment to social justice in education. It provides high-quality English medium education up to SSC level for economically disadvantaged children from the Turbhe slum area. This includes free education, transport, uniforms, books, and even daily necessities like snacks.",
	},
	{
		name: "ANNAYOJNA",
		location: "Vashi, Navi Mumbai",
		image: annayojana,
		shortDescription: "A lunch meal for bystanders of NMMC Hospital, Vashi",
		longDescription:
			"Addressing the hunger faced by relatives accompanying patients at the Vashi Municipal hospital, this initiative offers free lunches and bottled water to about 150 individuals every Saturday. The aim is to expand this service to more days through increased sponsorship.",
	},
	{
		name: "NUTRITION for TB-AFFLICTED CHILDREN",
		location: "Turbhe, Navi Mumbai",
		image: nutrition,
		shortDescription:
			"Providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks",
		longDescription:
			"Recognizing the high prevalence of TB-afflicted children in the Turbhe slum area, MOCCB initiated a scheme providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks to these children.",
	},
	{
		name: "MAR ALVARES SNEHA SADAN CLINIC",
		location: "Sawantwadi, Maharashtra",
		image: sneha,
		shortDescription:
			"A clinic for all villagers and a medical van which travels to villages around.",
		longDescription:
			"Recognizing the high prevalence of TB-afflicted children in the Turbhe slum area, MOCCB initiated a scheme providing daily nutrition comprising milk with Bournvita, boiled eggs, fruits, and snacks to these children.",
	},
	{
		name: "MAR ALVARES WELFARE CENTRE FOR CHILDREN",
		location: "Kalamboli, Navi Mumbai",
		image: sneha,
		shortDescription: "A space to empower children from streets & orphaned.",
		longDescription:
			"The centre is aimed to support the underprivileged children namely, street children, orphans, pavement dwellers children and those from poor socio economic background from the surrounding areas.",
	},
	{
		name: "ST. MARY’S TRAINING CENTRE",
		location: "Turbhe, Navi Mumbai",
		image: trainingCenter,
		shortDescription:
			"Skills training unit for the women in Turbhe slum areas.",
		longDescription: "Sponsor ₹50,000/- towards monthly expense",
	},
	{
		name: "GREGORIAN SPECIAL SCHOOL",
		location: "Roha, Maharashtra",
		image: specialSchool,
		shortDescription:
			"To support children with determination for their developmental needs.",
		longDescription:
			"An initiative of MOSC which seeks to find the beauty of children with determination Sponsor ₹ 2,00,000/- towards development of Sunday School curriculum",
	},
	{
		name: "GREGORIAN CARE CENTER",
		location: "Roha, Maharashtra",
		image: sneha,
		shortDescription:
			"Catering to needs and care for old age residents, contributing to their well-being.",
		longDescription:
			"Provides comfortable lodging, meals, medical assistance, and other amenities to its residents iii. Sponsor the ₹ 2,00,000/- towards a month expense or ₹ 15,000/- to care for 1 person a month.",
	},
	{
		name: "COUNSELLING CENTRES",
		location: "Coming soon",
		image: sneha,
		shortDescription:
			"Counselling clinics providing psychological care and support for community",
		longDescription:
			"Provides comfortable lodging, meals, medical assistance, and other amenities to its residents iii. Sponsor the ₹ 2,00,000/- towards a month expense or ₹ 15,000/- to care for 1 person a month.",
	},
	{
		name: "EDUCATION AID / SCHOLARSHIP",
		location: "Coming soon",
		image: sneha,
		shortDescription:
			"Provide fees assistance for the financially weaker and academically excelling students.",
		longDescription: "Sponsor ₹10,00,000/- towards the same for a year",
	},
];
