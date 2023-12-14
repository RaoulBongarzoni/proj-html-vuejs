import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore",




    /* immagini carosello jumbo */
    jumboImages: [
        "public/img/best-sem-seo-services-slide-2.png",
        "public/img/best-seo-services-slide-1.png",
        "public/img/best-seo-services-slide-3.png"
    ],


    /* contenuto cards sezione 1 */
    /* nome icona */
    /* titolo */
    /* sottotitolo */
    firstSectionCards: [{
        iconName: "road",
        title: "Establish Goals",
        subtitle: "lorem",

    },
    {
        iconName: "video",
        title: "Work With a Team",
        subtitle: "lorem",


    },
    {
        iconName: "droplet",
        title: "Get Results ",
        subtitle: "lorem",

    }],



    /* conte uto cards sezione 2 */
    /* nome icona */
    /* titolo */
    /* testo */
    /* link */
    SecondSectionCards: [{
        iconName: "google",
        title: "Google SEO",
        subtitle: "lorem",
        link: "#"

    },
    {
        iconName: "gear",
        title: "Brand Strategy",
        subtitle: "lorem",
        link: "#"


    },
    {
        iconName: "building",
        title: "Local SEO",
        subtitle: "lorem",
        link: "#"



    },
    {
        iconName: "chart-column",
        title: "SEO Analysis",
        subtitle: "lorem",
        link: "#"

    }],



    /* link e immagine sezione 3 */
    /* immagine */
    /* link */
    OurWorkElements: [
        {
            src: "public/img/case-study-gallery-3-1-400x300.jpg",
            link: "",
            alt: ""
        },
        {
            src: "public/img/case-study-gallery-2-400x300.jpg",
            link: "",
            alt: ""
        },
        {
            src: "public/img/case-study-gallery-1-1-400x300.jpg",
            link: "",
            alt: ""
        },
        {
            src: "public/img/case-study-gallery-4-1-400x300.jpg",
            link: "",
            alt: ""
        },
        {
            src: "public/img/case-study-gallery-5-1-400x300.jpg",
            link: "",
            alt: ""
        },
        {
            src: "public/img/case-study-gallery-6-1-400x300.jpg",
            link: "",
            alt: ""
        },



    ],

    /* financial plan */
    /* titolo */
    /* costo mensile */
    /* feature1 */
    /* feature2 */
    /* feature3 */
    AppFinancialPlans: [
        {
            name: "Standard",
            currency: "$",
            integerPart: "19",
            decimalPart: "99",
            timeDuration: "monthly",
            featureOne: "5",
            featureTwo: "5",
            featureThree: "Unlimited",
            link: "#",
        },
        {
            name: "Premium",
            currency: "$",
            integerPart: "29",
            decimalPart: "99",
            timeDuration: "monthly",
            featureOne: "10",
            featureTwo: "15",
            featureThree: "Unlimited",
            link: "#",
        },
        {
            name: "Professional",
            currency: "$",
            integerPart: "39",
            decimalPart: "99",
            timeDuration: "monthly",
            featureOne: "15",
            featureTwo: "30",
            featureThree: "Unlimited",
            link: "#",
        },
        {
            name: "Extreme",
            currency: "$",
            integerPart: "59",
            decimalPart: "99",
            timeDuration: "monthly",
            featureOne: "Unlimited",
            featureTwo: "Unlimited",
            featureThree: "Unlimited",
            link: "#",
        },
    ],



    NewsSection: [{
        img: "public/img/blog-post-6-320x202.jpg",
        alt: "news",
        title: "you need a seo agency now",
        date: "November 10, 2017",
        text: "lorem lorem lorem"


    },
    {
        img: "public/img/related-service-4-320x202.jpg",
        alt: "news",
        title: "Seo tips for your startup",
        date: "November 21, 2017",
        text: "lorem lorem lorem"


    },
    {
        img: "public/img/related-service-2-320x202.jpg",
        alt: "news",
        title: "image optimization ecc ecc",
        date: "November 32, 2017",
        text: "lorem lorem lorem"


    }],
    /* cards sezione news */
    /* immagine */
    /* titolo */
    /* data */
    /* snippet */



    ClientImages: [
        "public/img/clients_partner_1-200x202.png",
        "public/img/clients_partner_2-200x202.png",
        "public/img/clients_partner_3-200x202.png",
        "public/img/clients_partner_4-200x202.png",
        "public/img/clients_partner_5-200x202.png",
        "public/img/clients_partner_6-200x202.png",
    ],
    /* immagini carosello automatico */
    /* immagine */
    /* link */
});