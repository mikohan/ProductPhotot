import { NextPage } from 'next';
import { FC, Fragment } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
// -------- custom component -------- //
import { NavbarPhoto } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { company } from 'data/company-info';
import { job1Markup } from 'markups/others/job-cards';
import year from 'utils/currentYear';
const linkList = [
  { id: 1, title: '1. Terms & Conditions', to: 'terms-conditions' },
  { id: 2, title: '2. Privacy Policy', to: 'privacy-policy' },
  { id: 3, title: '4. Copyrights', to: 'copyrights' },
  { id: 4, title: '5. Cookies', to: 'cookies' }
];

const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Terms and Conditions', url: '/terms' }
];

const Terms: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <NavbarPhoto
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 mb-3">Terms and Conditions</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-0">
            <aside className="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
              <div className="widget">
                <nav id="sidebar-nav">
                  <ul className="list-unstyled text-reset">
                    {linkList.map(({ id, title, to }) => (
                      <li key={id}>
                        <ScrollLink smooth spy activeClass="active" to={to} className="nav-link">
                          {title}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="col-xl-8">
              <Element name="terms-conditions" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">1. Terms and Conditions</h2>
                    <p>
                      We are Angara Lab LLC ("Company," "we," "us," "our"), a company registered in California, United
                      States at 13163 Fountain Park Dr., Playa Vista, CA 90094.
                    </p>
                    <p>
                      We operate the website gettechworking.com (the "Site"), as well as any other related products and
                      services that refer or link to these legal terms (the "Legal Terms") (collectively, the
                      "Services").
                    </p>
                    <p>
                      You can contact us by phone at 9512244109, email at manheeusa@gmail.com, or by mail to 13163
                      Fountain Park Dr., Playa Vista, CA 90094, United States.
                    </p>
                    <p>
                      These Legal Terms constitute a legally binding agreement made between you, whether personally or
                      on behalf of an entity ("you"), and Angara Lab LLC, concerning your access to and use of the
                      Services. You agree that by accessing the Services, you have read, understood, and agreed to be
                      bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                      EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                    <p>
                      We will provide you with prior notice of any scheduled changes to the Services you are using. The
                      modified Legal Terms will become effective upon posting or notifying you by manheeusa@gmail.com,
                      as stated in the email message. By continuing to use the Services after the effective date of any
                      changes, you agree to be bound by the modified terms.
                    </p>
                    <p>
                      All users who are minors in the jurisdiction in which they reside (generally under the age of 18)
                      must have the permission of, and be directly supervised by, their parent or guardian to use the
                      Services. If you are a minor, you must have your parent or guardian read and agree to these Legal
                      Terms prior to you using the Services.
                    </p>
                    <h3 className="mt-5 mb-5">OUR SERVICES</h3>
                    <p>
                      The information provided when using the Services is not intended for distribution to or use by any
                      person or entity in any jurisdiction or country where such distribution or use would be contrary
                      to law or regulation or which would subject us to any registration requirement within such
                      jurisdiction or country. Accordingly, those persons who choose to access the Services from other
                      locations do so on their own initiative and are solely responsible for compliance with local laws,
                      if and to the extent local laws are applicable.
                    </p>
                    <p>
                      The Services are not tailored to comply with industry-specific regulations (Health Insurance
                      Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA),
                      etc.), so if your interactions would be subjected to such laws, you may not use the Services. You
                      may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                    </p>
                    <h3 className="mt-5 mb-5">INTELLECTUAL PROPERTY RIGHTS</h3>
                    <h4 className="mt-2 mb-2">Our intellectual property</h4>
                    <p>
                      We are the owner or the licensee of all intellectual property rights in our Services, including
                      all source code, databases, functionality, software, website designs, audio, video, text,
                      photographs, and graphics in the Services (collectively, the "Content"), as well as the
                      trademarks, service marks, and logos contained therein (the "Marks").
                    </p>
                    <p>
                      Our Content and Marks are protected by copyright and trademark laws (and various other
                      intellectual property rights and unfair competition laws) and treaties in the United States and
                      around the world.
                    </p>
                    <p>
                      The Content and Marks are provided in or through the Services "AS IS" for your personal,
                      non-commercial use or internal business purpose only.
                    </p>
                    <h4 className="mt-2 mb-2">Your use of our Services</h4>
                    <p>
                      Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section
                      below, we grant you a non-exclusive, non-transferable, revocable license to:
                    </p>
                    <List
                      data={[
                        'access the Services; and',
                        'download or print a copy of any portion of the Content to which you have properly, gained access.',
                        'solely for your personal, non-commercial use or internal business purpose.'
                      ]}
                    />
                    <p>
                      Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no
                      Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly
                      displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited
                      for any commercial purpose whatsoever, without our express prior written permission.
                    </p>
                    <p>
                      If you wish to make any use of the Services, Content, or Marks other than as set out in this
                      section or elsewhere in our Legal Terms, please address your request to: manheeusa@gmail.com. If
                      we ever grant you the permission to post, reproduce, or publicly display any part of our Services
                      or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and
                      ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or
                      displaying our Content.
                    </p>
                    <p>
                      We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                    </p>
                    <p>
                      Any breach of these Intellectual Property Rights will constitute a material breach of our Legal
                      Terms and your right to use our Services will terminate immediately.
                    </p>
                    <h4 className="mt-2 mb-2">Your submissions and contributions</h4>
                    <p>
                      Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our
                      Services to understand the (a) rights you give us and (b) obligations you have when you post or
                      upload any content through the Services.
                    </p>
                    <p>
                      Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other
                      information about the Services ("Submissions"), you agree to assign to us all intellectual
                      property rights in such Submission. You agree that we shall own this Submission and be entitled to
                      its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without
                      acknowledgment or compensation to you.
                    </p>
                    <p>
                      Contributions: The Services may invite you to chat, contribute to, or participate in blogs,
                      message boards, online forums, and other functionality during which you may create, submit, post,
                      display, transmit, publish, distribute, or broadcast content and materials to us or through the
                      Services, including but not limited to text, writings, video, audio, photographs, music, graphics,
                      comments, reviews, rating suggestions, personal information, or other material ("Contributions").
                      Any Submission that is publicly posted shall also be treated as a Contribution.
                    </p>
                    <h4 className="mt-2 mb-2">
                      You understand that Contributions may be viewable by other users of the Services.
                    </h4>
                    <p>
                      When you post Contributions, you grant us a license (including use of your name, trademarks, and
                      logos): By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable,
                      perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to:
                      use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly
                      perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your
                      Contributions (including, without limitation, your image, name, and voice) for any purpose,
                      commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other
                      works, your Contributions, and to sublicense the licenses granted in this section. Our use and
                      distribution may occur in any media formats and through any media channels.
                    </p>
                    <p>
                      This license includes our use of your name, company name, and franchise name, as applicable, and
                      any of the trademarks, service marks, trade names, logos, and personal and commercial images you
                      provide.
                    </p>
                    <p>
                      You are responsible for what you post or upload: By sending us Submissions and/or posting
                      Contributions through any part of the Services or making Contributions accessible through the
                      Services by linking your account through the Services to any of your social networking accounts,
                      you: confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post,
                      send, publish, upload, or transmit through the Services any Submission nor post any Contribution
                      that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive,
                      discriminatory, threatening to any person or group, sexually explicit, false, inaccurate,
                      deceitful, or misleading; to the extent permissible by applicable law, waive any and all moral
                      rights to any such Submission and/or Contribution; warrant that any such Submission and/or
                      Contributions are original to you or that you have the necessary rights and licenses to submit
                      such Submissions and/or Contributions and that you have full authority to grant us the
                      above-mentioned rights in relation to your Submissions and/or Contributions; and warrant and
                      represent that your Submissions and/or Contributions do not constitute confidential information.
                      You are solely responsible for your Submissions and/or Contributions and you expressly agree to
                      reimburse us for any and all losses that we may suffer because of your breach of (a) this section,
                      (b) any third party’s intellectual property rights, or (c) applicable law.
                    </p>
                    <p>
                      We may remove or edit your Content: Although we have no obligation to monitor any Contributions,
                      we shall have the right to remove or edit any Contributions at any time without notice if in our
                      reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we
                      remove or edit any such Contributions, we may also suspend or disable your account and report you
                      to the authorities.
                    </p>
                    <h3 className="mt-5 mb-5">USER REPRESENTATIONS</h3>
                    <p>By using the Services, you represent and warrant that:</p>
                    <List
                      data={[
                        `(1) all registration information you submit will be true, accurate, current, and complete;`,
                        `(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;`,
                        `(3) you have the legal capacity and you agree to comply with these Legal Terms;`,
                        `(4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services;`,
                        `(5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;`,
                        `(6) you will not use the Services for any illegal or unauthorized purpose;`,
                        `and (7) your use of the Services will not violate any applicable law or regulation.`
                      ]}
                    />
                    <p>
                      If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the
                      right to suspend or terminate your account and refuse any and all current or future use of the
                      Services (or any portion thereof).
                    </p>
                    <h3 className="mt-5 mb-5">USER REGISTRATION</h3>
                    <p>
                      You may be required to register to use the Services. You agree to keep your password confidential
                      and will be responsible for all use of your account and password. We reserve the right to remove,
                      reclaim, or change a username you select if we determine, in our sole discretion, that such
                      username is inappropriate, obscene, or otherwise objectionable.
                    </p>
                    <h3 className="mt-5 mb-5">PROHIBITED ACTIVITIES</h3>
                    <p>
                      You may not access or use the Services for any purpose other than that for which we make the
                      Services available. The Services may not be used in connection with any commercial endeavors
                      except those that are specifically endorsed or approved by us.
                    </p>
                    <h3 className="mt-5 mb-5">As a user of the Services, you agree not to:</h3>
                    <List
                      data={[
                        `Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.`,
                        `Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.`,
                        `Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.`,
                        `Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.`,
                        `Use any information obtained from the Services in order to harass, abuse, or harm another person.`,
                        `Make improper use of our support services or submit false reports of abuse or misconduct.`,
                        `Use the Services in a manner inconsistent with any applicable laws or regulations.
Engage in unauthorized framing of or linking to the Services.`,
                        `Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.`,
                        `Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.`,
                        `Delete the copyright or other proprietary rights notice from any Content.`,
                        `Attempt to impersonate another user or person or use the username of another user.`,
                        `Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").`,
                        `Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.`,
                        `Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.`,
                        `Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.`,
                        `Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.`,
                        `Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.`,
                        `Use a buying agent or purchasing agent to make purchases on the Services.`,
                        `Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.`,
                        `Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.`
                      ]}
                    />
                    <h3 className="mt-5 mb-5">USER GENERATED CONTRIBUTIONS</h3>
                    <p>
                      The Services may invite you to chat, contribute to, or participate in blogs, message boards,
                      online forums, and other functionality, and may provide you with the opportunity to create,
                      submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials
                      to us or on the Services, including but not limited to text, writings, video, audio, photographs,
                      graphics, comments, suggestions, or personal information or other material (collectively,
                      "Contributions"). Contributions may be viewable by other users of the Services and through
                      third-party websites. As such, any Contributions you transmit may be treated as non-confidential
                      and non-proprietary. When you create or make available any Contributions, you thereby represent
                      and warrant that:
                    </p>
                    <List
                      data={[
                        `The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.`,

                        `You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.`,
                        `You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.`,
                        `Your Contributions are not false, inaccurate, or misleading.`,
                        `Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.`,
                        `Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).`,
                        `Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.`,
                        `Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.`,
                        `Your Contributions do not violate any applicable law, regulation, or rule.`,
                        `Your Contributions do not violate the privacy or publicity rights of any third party.`,
                        `Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.`,
                        `Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.`,
                        `Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.`,
                        `Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.`
                      ]}
                    />
                    <h3 className="mt-5 mb-5">CONTRIBUTION LICENSE</h3>
                    <p>
                      By posting your Contributions to any part of the Services or making Contributions accessible to
                      the Services by linking your account from the Services to any of your social networking accounts,
                      you automatically grant, and you represent and warrant that you have the right to grant, to us an
                      unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free,
                      fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell,
                      publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat,
                      translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including,
                      without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise,
                      and to prepare derivative works of, or incorporate into other works, such Contributions, and grant
                      and authorize sublicenses of the foregoing. The use and distribution may occur in any media
                      formats and through any media channels.
                    </p>
                    <p>
                      This license will apply to any form, media, or technology now known or hereafter developed, and
                      includes our use of your name, company name, and franchise name, as applicable, and any of the
                      trademarks, service marks, trade names, logos, and personal and commercial images you provide. You
                      waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise
                      been asserted in your Contributions.
                    </p>
                    <p>
                      We do not assert any ownership over your Contributions. You retain full ownership of all of your
                      Contributions and any intellectual property rights or other proprietary rights associated with
                      your Contributions. We are not liable for any statements or representations in your Contributions
                      provided by you in any area on the Services. You are solely responsible for your Contributions to
                      the Services and you expressly agree to exonerate us from any and all responsibility and to
                      refrain from any legal action against us regarding your Contributions.
                    </p>
                    <p>We have the right, in our sole and absolute discretion,</p>
                    <List
                      data={[
                        `(1) to edit, redact, or otherwise change any Contributions;`,
                        `(2) to re-categorize any Contributions to place them in more appropriate locations on the Services;`,
                        `and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.`
                      ]}
                    />
                    <h3 className="mt-5 mb-5">GUIDELINES FOR REVIEWS</h3>
                    <p>
                      We may provide you areas on the Services to leave reviews or ratings. When posting a review, you
                      must comply with the following criteria:
                    </p>
                    <List
                      data={[
                        `(1) you should have firsthand experience with the person/entity being reviewed;`,
                        `(2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language;`,
                        `(3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; `,
                        `(4) your reviews should not contain references to illegal activity;`,
                        `(5) you should not be affiliated with competitors if posting negative reviews;`,
                        `(6) you should not make any conclusions as to the legality of conduct;`,
                        `(7) you may not post any false or misleading statements; `,
                        `and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.`
                      ]}
                    />
                    <p className="mt-5">
                      We may accept, reject, or remove reviews at our sole discretion. We have absolutely no obligation
                      to screen reviews or to delete reviews, even if anyone considers reviews objectionable or
                      inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the
                      views of any of our affiliates or partners. We do not assume liability for any review or for any
                      claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to
                      us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable
                      right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or
                      distribute all content relating to review.
                    </p>
                    <h3 className="mt-5 mb-5">SOCIAL MEDIA</h3>
                    <p>
                      As part of the functionality of the Services, you may link your account with online accounts you
                      have with third-party service providers (each such account, a "Third-Party Account") by either:
                      (1) providing your Third-Party Account login information through the Services; or (2) allowing us
                      to access your Third-Party Account, as is permitted under the applicable terms and conditions that
                      govern your use of each Third-Party Account. You represent and warrant that you are entitled to
                      disclose your Third-Party Account login information to us and/or grant us access to your
                      Third-Party Account, without breach by you of any of the terms and conditions that govern your use
                      of the applicable Third-Party Account, and without obligating us to pay any fees or making us
                      subject to any usage limitations imposed by the third-party service provider of the Third-Party
                      Account. By granting us access to any Third-Party Accounts, you understand that (1) we may access,
                      make available, and store (if applicable) any content that you have provided to and stored in your
                      Third-Party Account (the "Social Network Content'') so that it is available on and through the
                      Services via your account, including without limitation any friend lists and (2) we may submit to
                      and receive from your Third-Party Account additional information to the extent you are notified
                      when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you
                      choose and subject to the privacy settings that you have set in such Third-Party Accounts,
                      personally identifiable information that you post to your Third-Party Accounts may be available on
                      and through your account on the Services. Please note that if a Third-Party Account or associated
                      service becomes unavailable or our access to such Third-Party Account is terminated by the
                      third-party service provider, the Social Network Content may no longer be available on and through
                      the Services. You will have the ability to disable the connection between your account on the
                      Services and your Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE
                      THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
                      AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review any Social
                      Network Content for any purpose, including but not limited to, for accuracy, legality, or
                      non-infringement, and we are not responsible for any Social Network Content. You acknowledge and
                      agree that we may access your email address book associated with a Third-Party Account and your
                      contacts list stored on your mobile device or tablet computer solely for purposes of identifying
                      and informing you of those contacts who have also registered to use the Services. You can
                      deactivate the connection between the Services and your Third-Party Account by contacting us using
                      the contact information below or through your account settings (if applicable). We will attempt to
                      delete any information stored on our servers that was obtained through such a Third-Party Account,
                      except the username and profile picture that become associated with your account.
                    </p>
                    <h3 className="mt-5 mb-5">SERVICES MANAGEMENT</h3>
                    We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these
                    Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates
                    the law or these Legal Terms, including without limitation, reporting such user to law enforcement
                    authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit
                    the availability of, or disable (to the extent technologically feasible) any of your Contributions
                    or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to
                    remove from the Services or otherwise disable all files and content that are excessive in size or
                    are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed
                    to protect our rights and property and to facilitate the proper functioning of the Services.
                    <h3 className="mt-5 mb-5">PRIVACY POLICY</h3>
                    <p>
                      We care about data privacy and security. By using the Services, you agree to be bound by our
                      Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be
                      advised the Services are hosted in the United States. If you access the Services from any other
                      region of the world with laws or other requirements governing personal data collection, use, or
                      disclosure that differ from applicable laws in the United States, then through your continued use
                      of the Services, you are transferring your data to the United States, and you expressly consent to
                      have your data transferred to and processed in the United States.
                    </p>
                    <h3 className="mt-5 mb-5">TERM AND TERMINATION</h3>
                    <p>
                      These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT
                      LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION
                      AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING
                      CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                      FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
                      APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE
                      YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR
                      SOLE DISCRETION.
                    </p>
                    <p>
                      If we terminate or suspend your account for any reason, you are prohibited from registering and
                      creating a new account under your name, a fake or borrowed name, or the name of any third party,
                      even if you may be acting on behalf of the third party. In addition to terminating or suspending
                      your account, we reserve the right to take appropriate legal action, including without limitation
                      pursuing civil, criminal, and injunctive redress.
                    </p>
                    <h3 className="mt-5 mb-5">MODIFICATIONS AND INTERRUPTIONS</h3>
                    <p>
                      We reserve the right to change, modify, or remove the contents of the Services at any time or for
                      any reason at our sole discretion without notice. However, we have no obligation to update any
                      information on our Services. We will not be liable to you or any third party for any modification,
                      price change, suspension, or discontinuance of the Services.
                    </p>
                    <p>
                      We cannot guarantee the Services will be available at all times. We may experience hardware,
                      software, or other problems or need to perform maintenance related to the Services, resulting in
                      interruptions, delays, or errors. We reserve the right to change, revise, update, suspend,
                      discontinue, or otherwise modify the Services at any time or for any reason without notice to you.
                      You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by
                      your inability to access or use the Services during any downtime or discontinuance of the
                      Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support
                      the Services or to supply any corrections, updates, or releases in connection therewith.
                    </p>
                    <h3 className="mt-5 mb-5">GOVERNING LAW</h3>
                    <p>
                      These Legal Terms and your use of the Services are governed by and construed in accordance with
                      the laws of the State of California applicable to agreements made and to be entirely performed
                      within the State of California, without regard to its conflict of law principles.
                    </p>
                    <h3 className="mt-5 mb-5">DISPUTE RESOLUTION</h3>
                    <p>
                      Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and
                      individually, a "Party") shall be commenced or prosecuted in the state and federal courts located
                      in Los Angeles, California, and the Parties hereby consent to, and waive all defenses of lack of
                      personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such
                      state and federal courts. Application of the United Nations Convention on Contracts for the
                      International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are
                      excluded from these Legal Terms.
                    </p>
                    <h3 className="mt-5 mb-5">CORRECTIONS</h3>
                    <p>
                      There may be information on the Services that contains typographical errors, inaccuracies, or
                      omissions, including descriptions, pricing, availability, and various other information. We
                      reserve the right to correct any errors, inaccuracies, or omissions and to change or update the
                      information on the Services at any time, without prior notice.
                    </p>
                    <h3 className="mt-5 mb-5">DISCLAIMER</h3>
                    <p>
                      THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE
                      SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                      WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING,
                      WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                      AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS
                      OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                      SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
                      INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                      WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO
                      OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                      STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY
                      BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY
                      ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
                      OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                      OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                      RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
                      SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR
                      OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
                      TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                      PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR
                      BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                    </p>
                    <h3 className="mt-5 mb-5">LIMITATIONS OF LIABILITY</h3>
                    <p>
                      IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                      ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES,
                      INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                      SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <h3 className="mt-5 mb-5">INDEMNIFICATION</h3>
                    <p>
                      You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and
                      all of our respective officers, agents, partners, and employees, from and against any loss,
                      damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by
                      any third party due to or arising out of:
                    </p>
                    <List
                      data={[
                        `(1) your Contributions;`,
                        `(2) use of the Services;`,
                        `(3) breach of these Legal Terms;`,
                        `(4) any breach of your representations and warranties set forth in these Legal Terms;`,
                        `(5) your violation of the rights of a third party, including but not limited to intellectual property rights;`,
                        `or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.`
                      ]}
                    />
                    <h3 className="mt-5 mb-5">USER DATA</h3>
                    <p>
                      We will maintain certain data that you transmit to the Services for the purpose of managing the
                      performance of the Services, as well as data relating to your use of the Services. Although we
                      perform regular routine backups of data, you are solely responsible for all data that you transmit
                      or that relates to any activity you have undertaken using the Services. You agree that we shall
                      have no liability to you for any loss or corruption of any such data, and you hereby waive any
                      right of action against us arising from any such loss or corruption of such data.
                    </p>
                    <h3 className="mt-5 mb-5">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
                    <p>
                      Visiting the Services, sending us emails, and completing online forms constitute electronic
                      communications. You consent to receive electronic communications, and you agree that all
                      agreements, notices, disclosures, and other communications we provide to you electronically, via
                      email and on the Services, satisfy any legal requirement that such communication be in writing.
                      YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO
                      ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US
                      OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations,
                      rules, ordinances, or other laws in any jurisdiction which require an original signature or
                      delivery or retention of non-electronic records, or to payments or the granting of credits by any
                      means other than electronic means.
                    </p>
                    <h3 className="mt-5 mb-5">CALIFORNIA USERS AND RESIDENTS</h3>
                    <p>
                      If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance
                      Unit of the Division of Consumer Services of the California Department of Consumer Affairs in
                      writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at
                      (800) 952-5210 or (916) 445-1254.
                    </p>
                    <h3 className="mt-5 mb-5">MISCELLANEOUS</h3>
                    <p>
                      These Legal Terms and any policies or operating rules posted by us on the Services or in respect
                      to the Services constitute the entire agreement and understanding between you and us. Our failure
                      to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver
                      of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We
                      may assign any or all of our rights and obligations to others at any time. We shall not be
                      responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond
                      our reasonable control. If any provision or part of a provision of these Legal Terms is determined
                      to be unlawful, void, or unenforceable, that provision or part of the provision is deemed
                      severable from these Legal Terms and does not affect the validity and enforceability of any
                      remaining provisions. There is no joint venture, partnership, employment or agency relationship
                      created between you and us as a result of these Legal Terms or use of the Services. You agree that
                      these Legal Terms will not be construed against us by virtue of having drafted them. You hereby
                      waive any and all defenses you may have based on the electronic form of these Legal Terms and the
                      lack of signing by the parties hereto to execute these Legal Terms.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="privacy-policy" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">2. Privacy Policy</h2>
                    <p>
                      Protecting your private information is our priority. This Statement of Privacy applies to{' '}
                      {company.companyWebsite} and {company.companyName} and governs data collection and usage. For the
                      purposes of this Privacy Policy, unless otherwise noted, all references to {company.companyName}{' '}
                      include {company.companyWebsite} and {company.companyName}. The {company.companyName} website is
                      product photography products and services marketing site. By using the {company.companyName}{' '}
                      website, you consent to the data practices described in this statement.
                    </p>
                    <h3>Collection of your Personal Information</h3>
                    <p className="mb-5 mt-5">
                      In order to better provide you with products and services offered on our Site,{' '}
                      {company.companyName} may collect personally identifiable information, such as your:
                    </p>
                    <List
                      data={[
                        'First and Last Name',
                        'Mailing Address',
                        'E-Mail address',
                        'Phone Number',
                        'Employer',
                        'Job Title'
                      ]}
                    />
                    <p className="mb-5 mt-5">
                      {company.companyName} may also collect anonymous demographic information, which is not unique to
                      you, such as your:
                    </p>
                    <List data={['Age', 'Gender']} />

                    <p className="mb-0 mt-5">
                      We do not collect any personal information about you unless you voluntarily provide it to us.
                      However, you may be required to provide certain personal information to us when you elect to use
                      certain products or services available on the Site. These may include:
                    </p>
                    <List
                      data={[
                        'registering for an account on our Site;',
                        'entering a sweepstakes or contest sponsored by us or one of our partners;',
                        'signing up for special offers from selected third parties;',
                        'sending us an email message;',
                        `submitting your credit card or other payment information when ordering and purchasing products
                          and services on our Site. To wit, we will use your information for, but not limited to,
                      communicating with you in relation to services and/or products you have requested from us. We also
                      may gather additional personal or non-personal information in the future.`
                      ]}
                    />
                    <h3 className="mt-5 mb-5">Use of your Personal Information</h3>
                    <p>
                      {company.companyName} collects and uses your personal information to operate its website(s) and
                      deliver the services you have requested. {company.companyName} may also use your personally
                      identifiable information to inform you of other products or services available from{' '}
                      {company.companyName} and its affiliates.
                    </p>
                    <h3 className="mt-5 mb-5">Sharing Personal Information with Tird Parties</h3>
                    <p>{company.companyName} does not sell, rent or lease its customer lists to third parties.</p>
                    <p>
                      {company.companyName} may share data with trusted partners to help perform statistical analysis,
                      send you email or postal mail, provide customer support, or arrange for deliveries. All such third
                      parties are prohibited from using your personal information except to provide these services to{' '}
                      {company.companyName}, and they are required to maintain the confidentiality of your information.
                    </p>
                    <p>
                      {company.companyName} may disclose your personal information, without notice, if required to do so
                      by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of
                      the law or comply with legal process served on {company.companyName} or the site; (b) protect and
                      defend the rights or property of {company.companyName}; and/or (c) act under exigent circumstances
                      to protect the personal safety of users of {company.companyName}, or the public.
                    </p>
                    <h3 className="mt-5 mb-5">Tracking User Behaviour</h3>
                    <p>
                      {company.companyName} may keep track of the websites and pages our users visit within{' '}
                      {company.companyName}, in order to determine what {company.companyName} services are the most
                      popular. This data is used to deliver customized content and advertising within{' '}
                      {company.companyName} to customers whose behavior indicates that they are interested in a
                      particular subject area. User behavior, including mouse position, clicks, and page scrolling may
                      be used to observe page engagement and interest in the products and services being offered by{' '}
                      {company.companyName}.
                    </p>
                    <h3 className="mt-5 mb-5">Tracking Technologies</h3>
                    <p>
                      The following list sets out details of the individual tracking technologies used and the purposes
                      for which they are used:
                    </p>
                    <h4 className="mt-5 mb-2">Google</h4>
                    <List
                      data={[
                        'Technology: Google Analytics',
                        'Purpose: Analytics Platform',
                        'For More Information: https://marketingplatform.google.com/about/analytics/'
                      ]}
                    />
                    <h4 className="mt-5 mb-2">Linked In</h4>
                    <List
                      data={[
                        'Technology: Meta Pixel',
                        'Purpose: Tracking Tag for Advertising',
                        'For More Information: https://www.facebook.com/business/help/742478679120153'
                      ]}
                    />
                    <h4 className="mt-5 mb-2">Facebook</h4>
                    <List
                      data={[
                        'Technology: LinkedIn Insights Tag',
                        'Purpose: Tracking Tag for Advertising',
                        'https://business.linkedin.com/marketing-solutions/cx/21/10/insight-tag'
                      ]}
                    />
                    <h3 className="mt-5 mb-5">Automatically Collected Information</h3>
                    <p>
                      Information about your computer hardware and software may be automatically collected by{' '}
                      {company.companyName}. This information can include: your IP address, browser type, domain names,
                      access times and referring website addresses. This information is used for the operation of the
                      service, to maintain quality of the service, and to provide general statistics regarding use of
                      the {company.companyName} website.
                    </p>
                    <h3 className="mt-5 mb-5">Links</h3>
                    <p>
                      This website contains links to other sites. Please be aware that we are not responsible for the
                      content or privacy practices of such other sites. We encourage our users to be aware when they
                      leave our site and to read the privacy statements of any other site that collects personally
                      identifiable information.
                    </p>
                    <h3 className="mt-5 mb-5">Security of your Personal Information</h3>
                    <p>
                      {company.companyName} secures your personal information from unauthorized access, use, or
                      disclosure. {company.companyName} uses the following methods for this purpose:
                    </p>
                    <h3 className="mt-5 mb-5">SSL Protocol</h3>
                    <p>
                      When personal information (such as a credit card number) is transmitted to other websites, it is
                      protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
                    </p>
                    <p>
                      We strive to take appropriate security measures to protect against unauthorized access to or
                      alteration of your personal information. Unfortunately, no data transmission over the Internet or
                      any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect
                      your personal information, you acknowledge that:
                    </p>
                    <List
                      data={[
                        'there are security and privacy limitations',
                        'inherent to the Internet which are beyond our control;',
                        'security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.'
                      ]}
                    />
                    <h3 className="mt-5 mb-5">Children Under Thirteen</h3>
                    <p>
                      {company.companyName} does not knowingly collect personally identifiable information from children
                      under the age of thirteen. If you are under the age of thirteen, you must ask your parent or
                      guardian for permission to use this website.
                    </p>
                    <h3 className="mt-5 mb-5">Email Communication</h3>
                    <p>
                      From time to time, {company.companyName} may contact you via email for the purpose of providing
                      announcements, promotional offers, alerts, confirmations, surveys, and/or other general
                      communication. In order to improve our Services, we may receive a notification when you open an
                      email from {company.companyName} or click on a link therein. If you would like to stop receiving
                      marketing or promotional communications via email from {company.companyName}, you may opt out of
                      such communications by clicking on the UNSUBSCRIBE button.
                    </p>
                    <h3 className="mt-5 mb-5">Changes to this Statement</h3>
                    <p>
                      {company.companyName} reserves the right to change this Privacy Policy from time to time. We will
                      notify you about significant changes in the way we treat personal information by sending a notice
                      to the primary email address specified in your account, by placing a prominent notice on our site,
                      and/or by updating any privacy information on this page. Your continued use of the Site and/or
                      Services available through this Site after such modifications will constitute your: (a)
                      acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that
                      Policy.
                    </p>
                    <h3 className="mt-5 mb-5">Contact Information</h3>
                    <p>
                      {company.companyName} welcomes your questions or comments regarding this Statement of Privacy. If
                      you believe that {company.companyName} has not adhered to this Statement, please contact{' '}
                      {company.companyName} at:
                    </p>
                    <List
                      data={[
                        `Company Name: ${company.companyName}`,
                        `Address:${company.companyAddress}`,
                        `Email: ${company.companyEmail}`,
                        `Phone: ${company.companyPhone}`
                      ]}
                    />
                  </div>
                </div>
              </Element>

              <Element name="copyrights" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">4. Copyrights</h2>
                    <p className="mt-5">
                      Copyright © 2013-{year}, the {company.companyName}, Los Angeles, CA. Reproduce with permission. No
                      portion of the {company.companyName}
                      copyrighted materials contained within the UB-04 Data file or UB-04 Data Specification Manual may
                      be copied without the express written consent of the {company.companyName}.
                    </p>

                    <p>
                      {' '}
                      {company.companyName}copyrighted materials including the UB-04 codes and descriptions may not be
                      removed, copied, or utilized within any software, product, service, solution or derivative work
                      without the written consent of the {company.companyName}.
                    </p>
                    <p className="mb-0">
                      Making copies or utilizing the content of the UB-04 Data file or UB-04 Manual, including the codes
                      and/or descriptions, for internal purposes, resale and/or to be used in any product or
                      publication; creating any modified or derivative work of the UB-04 Manual and/or codes and
                      descriptions; and/or making any commercial use of UB-04 Manual or any portion thereof, including
                      the codes and/or descriptions, is only authorized with an express license from , a subsidiary of
                      the {company.companyName}
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="cookies" className="wrapper pt-16">
                <div className="card mb-10">
                  <div className="card-body p-10">
                    <h2 className="mb-3">5. Cookies</h2>
                    <h3 className="mt-5 mb-5">Sample WikiHow Cookie Policy</h3>
                    <p>What are cookies?</p>
                    <p>
                      Cookies are small text files containing a string of characters that can be placed on your computer
                      or mobile device that uniquely identify your browser or device. What are cookies used for?
                    </p>
                    <p>
                      Cookies allow a site or services to know if your computer or device has visited that site or
                      service before. Cookies can then be used to help understand how the site or service is being used,
                      help you navigate between pages efficiently, help remember your preferences, and generally improve
                      your browsing experience. Cookies can also help ensure marketing you see online is more relevant
                      to you and your interests.
                    </p>
                    <h4 className="mt-2 mb-2">What types of cookies does {company.companyWebsite} use?</h4>
                    <p>
                      There are generally four categories of cookies: “Strictly Necessary,” “Performance,”
                      “Functionality,” and “Targeting.” wikiHow routinely uses all four categories of cookies on the
                      Service. You can find out more about each cookie category below.
                    </p>
                    <List
                      data={[
                        `Strictly Necessary Cookies. These cookies are essential, as they enable you to move around the Service and use its features, such as accessing logged in or secure areas.`,
                        `Performance Cookies. These cookies collect information about how you have used the Service, for example, information related to the unique username you have provided, so that less strain is placed on our backend infrastructure. These cookies may also be used to allow us to know that you have logged in so that we can serve you fresher content than a user who has never logged in. We also use cookies to track aggregate Service usage and experiment with new features and changes on the Service. The information collected is used to improve how the Service works.`,
                        `Functionality Cookies. These cookies allow us to remember how you are logged in, whether you chose to no longer see advertisements, whether you made an edit to an article on the Service while logged out, when you logged in or out, the state or history of Service tools you have used. These cookies also allow us to tailor the Service to provide enhanced features and content for you and to remember how you have customized the Service in other ways, such as customizing the toolbars we offer in the right column of every page. The information these cookies collect may be anonymous, and they are not used to track your browsing activity on other sites or services.`,
                        `Targeting Cookies. wikiHow, our advertising partners or other third party partners may use these types of cookies to deliver advertising that is relevant to your interests. These cookies can remember that your device has visited a site or service, and may also be able to track your device is browsing activity on other sites or services other than wikiHow. This information may be shared with organizations outside wikiHow, such as advertisers and/or advertising networks to deliver the advertising, and to help measure the effectiveness of an advertising campaign, or other business partners for the purpose of providing aggregate Service usage statistics and aggregate Service testing.`
                      ]}
                    />
                    <h4 className="mt-2 mb-2">How long will cookies stay on my device?</h4>
                    <p>
                      The length of time a cookie will stay on your computer or mobile device depends on whether it is a
                      “persistent” or “session” cookie. Session cookies will only stay on your device until you stop
                      browsing. Persistent cookies stay on your computer or mobile device until they expire or are
                      deleted.
                    </p>
                    <h4 className="mt-2 mb-2">First and third party cookies</h4>
                    <p>
                      First-party cookies are cookies that belong to wikiHow, third-party cookies are cookies that
                      another party places on your device through our Service. Third-party cookies may be placed on your
                      device by someone providing a service for wikiHow, for example to help us understand how our
                      service is being used. Third-party cookies may also be placed on your device by our business
                      partners so that they can use them to advertise products and services to you elsewhere on the
                      Internet.
                    </p>
                    <h4 className="mt-2 mb-2">How to control and delete cookies</h4>
                    <p>
                      If you want to delete cookies follow the instructions at
                      http://www.wikihow.com/Clear-Your-Browser%27s-Cookies. If you wish to disable your browser from
                      receiving cookies follow the instructions at http://www.wikihow.com/Disable-Cookies. Note that if
                      you set your browser to disable cookies, you may not be able to access certain parts of our
                      Service and other parts of our Service may not work properly. You can find out more information
                      cookie settings at third-party information sites, such as www.allaboutcookies.org.
                    </p>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

const List: FC<{ data: string[] }> = ({ data }) => {
  return (
    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
      {data.map((item) => {
        return (
          <li key={item}>
            <span>
              <i className="uil uil-check" />
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Terms;
