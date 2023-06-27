/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, F as Fragment, d as createVNode } from './chunk.e21881fe.js';
import 'html-escaper';

const $$Astro = createAstro("https://2023.igem.wiki/lambert-ga");
const $$TwoColPara = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TwoColPara;
  const { title1, title2, content1, content2, headingLevel, image1, image2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex justify-between">
    <div class="mr-4">
        ${headingLevel == "h1" && renderTemplate`<h1>${title1}</h1>`}
        ${headingLevel == "h2" && renderTemplate`<h2>${title1}</h2>`}
        ${headingLevel == "h3" && renderTemplate`<h3>${title1}</h3>`}
        <p>${content1}</p>
        <img${addAttribute(image1, "src")} alt="">
    </div>
    <div>
        ${headingLevel == "h1" && renderTemplate`<h1>${title1}</h1>`}
        ${headingLevel == "h2" && renderTemplate`<h2>${title1}</h2>`}
        ${headingLevel == "h3" && renderTemplate`<h3>${title1}</h3>`}
        <p>${content2}</p>
        <img${addAttribute(image2, "src")} alt="">
    </div>
</div>`;
}, "/Users/ryandu/Desktop/iGEM/2023/wiki/src/components/md_components/TwoColPara.astro");

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./chunk.1811d405.js')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/PageLayout.astro",
  "title": "Human Practices aye",
  "header": "https://static.igem.wiki/teams/4245/wiki/the-new-rca-header.jpg"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "human-practices",
    "text": "Human Practices"
  }, {
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 3,
    "slug": "heading-3",
    "text": "Heading 3"
  }, {
    "depth": 2,
    "slug": "patients",
    "text": "Patients"
  }, {
    "depth": 2,
    "slug": "cardiologists",
    "text": "Cardiologists"
  }, {
    "depth": 3,
    "slug": "overview-1",
    "text": "Overview"
  }, {
    "depth": 4,
    "slug": "cookbook-creation",
    "text": "Cookbook Creation"
  }, {
    "depth": 4,
    "slug": "food-bank",
    "text": "Food Bank"
  }, {
    "depth": 2,
    "slug": "references",
    "text": "References"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    pre: "pre",
    code: "code",
    span: "span",
    blockquote: "blockquote",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    h3: "h3",
    em: "em",
    strong: "strong",
    ul: "ul",
    li: "li",
    h4: "h4"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "human-practices",
      children: "Human Practices"
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: ["Lambert iGEM\u2019s 2022 project, ", createVNode(_components.a, {
        href: "text.com",
        children: "CADlock"
      }), ", was shaped by the expertise of stakeholders during every step of its development. Inspired by the devastating impacts of coronary artery disease (CAD) and the growing research about microRNA (miRNA) biomarkers, we developed biosensors that can detect miRNA biomarkers correlated with CAD. In addition, we developed Micro-Q, a frugal fluorometer that quantifies fluorescence output from our biosensors. Throughout our project, we looked for ways to increase the accessibility of CAD diagnosis and expand the goals of healthy living to many different groups of people."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#e1e4e8"
            },
            children: "help"
          })
        })
      })
    }), "\n", createVNode($$TwoColPara, {
      headingLevel: "h2",
      title1: "title 1",
      title2: "title 2",
      content1: "some very very long content paragraph thingy magigy. agiorjaoir aior adoi sdoi aodi daso",
      content2: "content2 Country of Origin: Provides the country which the recipe originated from.",
      image1: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      image2: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "some text hello there"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Syntax"
          }), createVNode(_components.th, {
            children: "Description"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Header"
          }), createVNode(_components.td, {
            children: "Title"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Paragraph"
          }), createVNode(_components.td, {
            children: "Text"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "heading-3",
      children: "Heading 3"
    }), "\n", createVNode(_components.p, {
      children: ["Initially, we intended our ", createVNode(_components.em, {
        children: "project"
      }), " to ", createVNode(_components.strong, {
        children: "inform"
      }), " ", createVNode(_components.em, {
        children: "patients"
      }), " directly, but we discovered that the interpretation of results was best conducted by a trained medical professional. While we did discuss our project with patients diagnosed with CAD, we also contacted cardiologists, who could provide a clinical perspective on diagnosis and treatment. Many of the cardiologists we spoke to were hesitant about the feasibility of utilizing miRNA biomarkers for screening due to their relative novelty. In response to this, we contacted leading researchers in miRNA biomarkers to discuss what could be done to increase the potential for miRNAs to be used as a biomarker in clinical settings. Finally, we contacted community organizations that deal with factors that impact heart disease, including local food banks and the Georgia Office of Cardiac Care."]
    }), "\n", createVNode(_components.h2, {
      id: "patients",
      children: "Patients"
    }), "\n", createVNode(_components.p, {
      children: "Throughout our project, we focused the development of CADlock on its end users: patients and cardiologists. However, due to safety and anonymity concerns, we faced some issues in speaking to patients. Eventually, we surveyed several patients over the age of 18. All patients were made aware that participation was voluntary and consented to participate in the surveys. In addition, they could discontinue the survey at any point or decline to answer any questions they did not feel comfortable answering. We conducted our surveys through in-person interviews and asked about their demographic information, diagnosis story, and expectations/knowledge regarding CAD."
    }), "\n", createVNode(_components.p, {
      children: "A majority of the patients we interviewed were middle-aged and received their diagnosis after their 40th birthday. Many of them were aware of their risk factors (such as family history or smoking) before their diagnosis; however, they were not concerned about heart disease and most did not take any additional precautions until symptoms worsened their quality of life. When we described the biosensors we developed, the patients expressed interest in using these tools to monitor their risk and/or condition both before and after diagnosis."
    }), "\n", createVNode(_components.p, {
      children: "Based on this feedback, we were able to validate that patients who had no symptoms before diagnosis were interested in using our biosensors for post-diagnosis monitoring. Additionally, we discovered that patients who were aware of their risk factors for CAD such as family history were also interested in ongoing monitoring for an earlier diagnosis."
    }), "\n", createVNode(_components.h2, {
      id: "cardiologists",
      children: "Cardiologists"
    }), "\n", createVNode(_components.h3, {
      id: "overview-1",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "As we investigated the feasibility of implementing CADlock biosensors as a point-of-care device in coronary artery disease (CAD) testing, we also spoke to several different cardiologists to understand their perspectives on the potential clinical use of these biosensors. Their feedback fueled our approach to further work in ensuring the future use of our biosensors and the design of Micro-Q. In most cases we held multiple meetings with each expert so they could follow our progress and contribute further feedback."
    }), "\n", createVNode(_components.p, {
      children: "Although we allowed discussions to flow based on each cardiologist\u2019s area of expertise, we created a list of general questions to lead each conversation. These are as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Have you heard of using miRNAs to diagnose cardiovascular disease?"
      }), "\n", createVNode(_components.li, {
        children: "What are the benefits of early diagnosis for CAD/ischemic heart disease?"
      }), "\n", createVNode(_components.li, {
        children: "What are current trends in the diagnosis of cardiovascular disease?"
      }), "\n", createVNode(_components.li, {
        children: "What would be the most convenient way to use our biosensors in a doctor\u2019s office? - - What type of equipment is available to you?"
      }), "\n", createVNode(_components.li, {
        children: "How are patients diagnosed with coronary artery disease?"
      }), "\n", createVNode(_components.li, {
        children: "What does a typical diagnosis story look like?"
      }), "\n", createVNode(_components.li, {
        children: "What equipment and tests are typically used in diagnosing a patient with CAD?"
      }), "\n", createVNode(_components.li, {
        children: "What conditions do you rule out before diagnosing a patient with CAD?"
      }), "\n", createVNode(_components.li, {
        children: "Is there a need for a screening tool for CAD? What kind of patients would you screen?"
      }), "\n"]
    }), "\n", createVNode(_components.h4, {
      id: "cookbook-creation",
      children: "Cookbook Creation"
    }), "\n", createVNode(_components.p, {
      children: "After compiling a collection of heart-healthy inclusive foods, we created a global heart-healthy cookbook with our mascot Chef Threehearts (see Figure 10)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "embed cookbook, same as inclusivity page"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "Chapter Layout"
        })
      }), "\nTo better organize our recipes, our cookbook is divided into 9 chapters, each representing a global region used to organize our recipes. The global regions are listed below:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "East Asia"
      }), "\n", createVNode(_components.li, {
        children: "Southeast Asia"
      }), "\n", createVNode(_components.li, {
        children: "Middle East"
      }), "\n", createVNode(_components.li, {
        children: "South Asia"
      }), "\n", createVNode(_components.li, {
        children: "Sub-Saharan Africa"
      }), "\n", createVNode(_components.li, {
        children: "Europe"
      }), "\n", createVNode(_components.li, {
        children: "Latin America"
      }), "\n", createVNode(_components.li, {
        children: "North America (US/Canada)"
      }), "\n", createVNode(_components.li, {
        children: "Oceania/Pacific Islands"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Each recipe page includes the following (see Figure 9):"
    }), "\n", createVNode(_components.p, {
      children: "Background: Description of the Cultural Origin of the recipe and its characteristics.\nNutrition: Includes Calories, Sodium, Sat. Fat, Protein, Cholesterol and Carbohydrates.\nIngredients: Includes a list of ingredients and any extra materials apart from standard cooking equipment.\nCountry of Origin: Provides the country which the recipe originated from.\nInstructions: Provides a set of concise instructions, with any preparation steps included beforehand.\nDiet Restrictions: Color key mentioning any dietary restrictions this recipe may have."
    }), "\n", createVNode(_components.h4, {
      id: "food-bank",
      children: "Food Bank"
    }), "\n", createVNode(_components.p, {
      children: "To reach prospective patients and address the correlation between socioeconomic status and the risk of CAD, we implemented a food bank initiative to reach out to communities in these impoverished conditions (Clark et al.). This disparity is often associated with the lack of proactive care or confusion on ways to implement a healthier lifestyle (2009). Since a balanced diet and continuous exercise are correlated with a decreased risk of heart disease by about 50%, we decided to implement dietary habits in our initiative to aid underprivileged members of our community (Yeh 2019). We first researched methods to effectively spread the importance of heart health in an accessible manner and then contacted local food banks to integrate our recipes into our district. The Place, a local food bank, was extremely accommodating in arranging meeting dates during our correspondence, and we kept in constant contact by scheduling calls and emails. From our correspondence, we sent a condensed pamphlet full of heart-healthy recipes along with their meal kit (a package The Place clients can customize to order their weekly meal ingredients) (see Fig. 10)."
    }), "\n", createVNode(_components.p, {
      children: "We took recipes from our collaborations with Waterloo iGEM, REC Chennai, and USP.eel and compiled them into the pamphlet using ingredients provided by the meal kits to expand our outreach. Additionally, we included suggestions on how to implement a healthier lifestyle and a short excerpt introducing synthetic biology and scientific information. We decided to include these scientifically focused excerpts in order to hopefully garner interest and inspire recipients to investigate the synthetic biology field, along with justifying why the recipes were adapted to focus on a heart-healthy approach."
    }), "\n", createVNode(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.p, {
      children: ["Clark, A. M., DesMeules, M., Luo, W., Duncan, A. S., & Wielgosz, A. (2009, September 22). Socioeconomic status and cardiovascular disease: Risks and implications for care. Nature reviews. Cardiology. Retrieved October 6, 2022, from ", createVNode(_components.a, {
        href: "https://pubmed.ncbi.nlm.nih.gov/19770848/#:~:text=Low%20SES%20is%20associated%20with,in%20people%20of%20low%20SES",
        children: "https://pubmed.ncbi.nlm.nih.gov/19770848/#:~:text=Low%20SES%20is%20associated%20with,in%20people%20of%20low%20SES"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Cleveland Clinic. (2022). Heart disease risk: How race and ethnicity play a role. Cleveland Clinic. Retrieved October 7, 2022, from ", createVNode(_components.a, {
        href: "https://my.clevelandclinic.org/health/articles/23051-ethnicity-and-heart-disease#:~:text=Cardiovascular%20disease%20is%20the%20leading%20cause%20of%20death%20for%20all,with%2036%25%20of%20white%20adults",
        children: "https://my.clevelandclinic.org/health/articles/23051-ethnicity-and-heart-disease#:~:text=Cardiovascular%20disease%20is%20the%20leading%20cause%20of%20death%20for%20all,with%2036%25%20of%20white%20adults"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Mochari-Greenberger, H., & Mosca, L. (2015, May). Differential outcomes by race and ethnicity in patients with coronary heart disease: A contemporary review. Current cardiovascular risk reports. Retrieved October 6, 2022, from ", createVNode(_components.a, {
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4405256/#:~:text=In%20the%20USA%2C%20race%20and,or%20Pacific%20Islanders%20%5B1%5D",
        children: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4405256/#:~:text=In%20the%20USA%2C%20race%20and,or%20Pacific%20Islanders%20%5B1%5D"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Yeh , J. (2019, November 4). Lifestyle changes to Lower Heart Disease Risk. Harvard Health. Retrieved October 9, 2022, from ", createVNode(_components.a, {
        href: "https://www.health.harvard.edu/blog/lifestyle-changes-to-lower-heart-disease-risk-2019110218125#:~:text=The%20good%20news%20is%20that,disease%20risk%20by%20nearly%2050%25",
        children: "https://www.health.harvard.edu/blog/lifestyle-changes-to-lower-heart-disease-risk-2019110218125#:~:text=The%20good%20news%20is%20that,disease%20risk%20by%20nearly%2050%25"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/hp";
const file = "/Users/ryandu/Desktop/iGEM/2023/wiki/src/pages/hp.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/ryandu/Desktop/iGEM/2023/wiki/src/pages/hp.mdx";

export { Content, Content as default, file, frontmatter, getHeadings, url };
