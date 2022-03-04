import Head from "next/head";
import Hero from "../Components/Home/Hero";
import WhyPeople from "../Components/Home/WhyPeople";
import Pricings from "../Components/Pricings";
import Svgs from "../Components/Svgs";
import ContentTheme from "../Themes/ContentTheme.js";

export default function Index({ data }) {
  const {
    home: { hero, model, dynamic, company, ready, whypeople, pricings },
  } = data;
  return (
    <>
      <Head>
        <title>Davuptech - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Davuptech - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Hero
          title1={hero?.title1}
          title2={hero?.title2}
          title3={hero?.title3}
          button1={hero?.button1}
          button2={hero?.button2}
          description={hero?.description}
        />

        <ContentTheme
          title={model?.title}
          description={model?.description}
          button={model?.button}
          themeImg={Svgs.creativeSvg}
        />
        <ContentTheme
          title={company?.title}
          description={company?.description}
          button={company?.button}
          themeImg={Svgs.companySvg}
          ifRowReverse
          ifJustifyEnd
          ifColumnReverse
        />
        <WhyPeople
          maintitle={whypeople?.maintitle}
          subTitle={whypeople?.subTitle}
          choose={whypeople?.choose}
        />
        <ContentTheme
          title={dynamic?.title}
          description={dynamic?.description}
          button={dynamic?.button}
          themeImg={Svgs.dynamicSvg}
        />
        <ContentTheme
          title={ready?.title}
          description={ready?.description}
          button={ready?.button}
          themeImg={Svgs.readySvg}
          ifRowReverse
          ifJustifyEnd
          ifColumnReverse
        />
        <Pricings
          title={pricings?.title}
          subTitle={pricings?.subtitle}
          plans={pricings?.plans}
        />
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const URL = `http://localhost:3000/api/davapi`;
  const req = await fetch(URL);
  const data = await req.json();

  return {
    props: {
      data,
    },
  };
}
