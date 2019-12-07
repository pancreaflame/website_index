import React from "react"
import { injectIntl, IntlContextConsumer } from "gatsby-plugin-intl"
import GeneralPageTemplate from "./generalPageTemplate"

const LinkPageTemplate = ({ pageContext, intl }) => {
  const item = pageContext.item

  return (
    <GeneralPageTemplate title={item.cname || item.ename}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            {/* <p>{currentLocale === "zh" ? (item.cname || item.ename) : (item.ename || item.cname) }</p> */}

            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <div>{"Image"}</div>
              <h2>{item.cname}</h2>
              <p>{item.ename}</p>
            </div>

            <div
              style={{
                maxWidth: "400px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <dl>
                <dt>
                  <span>
                    {intl.formatMessage({ id: "item.description" })}:{" "}
                  </span>
                </dt>
                <dd>{item.description}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.url" })}: </span>
                </dt>
                <dd>{item.url}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.subject" })}: </span>
                </dt>
                <dd>{item.subject_tag_ids}</dd>

                <dt>
                  <span>
                    {intl.formatMessage({ id: "item.maincategory" })}:{" "}
                  </span>
                </dt>
                <dd>{item.maincategory_tag_ids}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.media" })}: </span>
                </dt>
                <dd>{item.media_tag_ids}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.tool" })}: </span>
                </dt>
                <dd>{item.tool_tag_ids}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.stage" })}: </span>
                </dt>
                <dd>{item.stage_tag_ids}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.state" })}: </span>
                </dt>
                <dd>{item.state_tag_ids}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.license" })}: </span>
                </dt>
                <dd>{item.license_tag_ids}</dd>

                <dt>
                  <span>
                    {intl.formatMessage({ id: "item.promotional" })}:{" "}
                  </span>
                </dt>
                <dd>{item.promotional_article}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.dev_team" })}: </span>
                </dt>
                <dd>{item.dev_team}</dd>

                <dt>
                  <span>
                    {intl.formatMessage({ id: "item.founded_time" })}:{" "}
                  </span>
                </dt>
                <dd>{item.founded_time}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.source" })}: </span>
                </dt>
                <dd>{item.source}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.added_time" })}: </span>
                </dt>
                <dd>{item.added_time}</dd>

                <dt>
                  <span>{intl.formatMessage({ id: "item.added_by" })}: </span>
                </dt>
                <dd>{item.added_by}</dd>
              </dl>
            </div>

            <div>
              <button>{intl.formatMessage({ id: "item.suggest_edit" })}</button>
            </div>
          </>
        )}
      </IntlContextConsumer>
    </GeneralPageTemplate>
  )
}

export default injectIntl(LinkPageTemplate)
