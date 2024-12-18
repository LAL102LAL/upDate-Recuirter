import React from "react";
import "./NavBar.css";

const Footersection = () => {
  return (
    <>
      {/* footer part */}
      <footer id="footer " className="bg-red-600">
        <div className="footer-content ">
          <div className="footer-logo">
            <h2>upDate</h2>
            <p className="tagline">Helping you find your dream job</p>
          </div>
          <div className="footer-links">
            <a
              href="/Aboutus"
              className="text-white hover:scale-105 transition-all shadow-lg hover:text-primary duration-150"
            >
              About Us
            </a>
            <a
              href="/Contactus"
              className="text-white hover:scale-105 transition-all shadow-lg hover:text-primary duration-150"
            >
              Contact Us
            </a>
            <a
              href="/carrer"
              className="text-white hover:scale-105 transition-all shadow-lg hover:text-primary  duration-150"
            >
              Carrer
            </a>
            <a
              href="/privacy"
              className="text-white hover:scale-105 transition-all shadow-lg hover:text-primary duration-150 "
            >
              Privacy policy
            </a>
          </div>
          <div className="footer-socials my-5">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEUAAAD///8jIyP4+Pg3Nzf8/Pzt7e3p6en09PSHh4fm5ubd3d2NjY3MzMwvLy+tra0pKSnU1NRDQ0N7e3u7u7uVlZVLS0ttbW0eHh5dXV3ExMRjY2M9PT2cnJy0tLQWFhakpKRVVVUMDAySAM/EAAAKr0lEQVR4nO1d6XrqOAwNDQlr2XcoCXn/hxxSCjpBxsi20hTmnvkz301JdBLLkrXYUQuxKKLXwjhB8SP4/+6yadnc0UvNZDrzpiXzwbpvItNZNy2XH7Z9TiZ9US5nNp17MnGvaZn8Me/ekXlB3ScMq2SOm6YFCkE2RjKDU9PyhGE2BTIvPchK9OIbmWPTsoRjfCXzqhYGse//kHmDDxNFxwuZ1zWXiNIROJP5bFoOHexKMq9s+xFnPyBqpVnTYiihcyaza1oILSzOZF5yFWPCOomSpmXQQxLFTYugh370JhNziUWUNy2CHpbRm1iZEuto37QIelid/3sbTKJ20yLooYg+mhZBE//I/FX8z8iMDm0JDm3NfMimfXvqbCL+1XMyXy0ZYsXl9+YIiZel+C09J5MthGwGhyACKFQe3+6a5PLVo0BnVgMhm0WA/Ihs2b3dMznKR5loAljHFgYInchogemwhYtVF81mSyGZRMXTmwOXndPQlU3NOyGbgUI2YQtcpm7elozMRjrQwtd6I9KXVt9BX0oIjeZMSCbJnaW/A3BJXL+z1APo0TPiTnoP+nChwV7g0nK2wlIyH6Q2KY9OnYjNNMTaFJAIbzmOscjBNwNrM9iyq3Oy2Av/EOlkCt/fI5sndzTXNAI+2SQzGdNIl7sfdxjBpNn1CU7KyWRfNJbGTDVX9FI7ntZmBH5Td+jzRhyWAO2d7b2tyTxMRx6CRB9Q1RN/eRksl/XMitSzz9V8SR/OpzqqgA8fj92Vv4TT4mxOajNl8m5gxA/dBYF3kSz8uDiuNGEkjNnFCQ20xFmaOfgYn77LX8ffwWqAT50Hupg6irGin7YGjr8luL4EeCi/CG6CWw7rAAtL1/cAcCUDr7DPr37SQHNRmxmMsa6jQAjn4ZmTvFxtClKbVG7BZx0dLu5kMrKOBmtzovluIF2LzEAROzNXeRDuE8cMrA17+9nyNvqTo+zeBxqbrX7YUtVjFpzbnDTwSbqi3A/4FcE1rx5kNuBUfjEXGZy0PveuGSbgkKW9wDiij31q08Do8rXYmtT5+doGg3LdZWh9hZex3ZLK9nm2KiejkT/zF+kjO0X7HsDPcxiS2iz4HWCJ9WSgYehXoVLM0w0CreVq/gF2w/pp5sBFI4fv69OBbeCmYQ8BDss91sBl6ilHBb5kDmTrY/72QRW4m3AFrMMDnEuEd7LJ7lSC2jyKPe1TbS4BmbMjycID5htSm67ZSYOGhNbAa53NEZAGpLdvyDNB7MkYEjiB0g20ihECyJxSmzg065pCtjMYhwO1KpGQBC2ozYJNAhObkzYCLn299GEImQzWNlxtYCDdv/sCHGVDsNcbQalz8N4NAfMexJ6q3jVwkbnWQoTVAaBTydUGrE1lEQ3OZfIV9Pw7BBY10FqsZViLgdMDHw44tvKwx98htEIDrA0fMKA26e3DYYJUKz/9g1AybZqXDOlZUJvdxcEv4J/Ua6qDa2cgYD7gN4MhddGOSio59Nn3CC8EGpJ0hlEDE1epNjBj+EdhH0LhhqA2PPJ3oFHVmV16dq5c1KpTblAgk5GEXa42sGjZnYCLYSoPhsanPoGIfG0DThqMsVoaEFXGLSx/udqMQG1oyAmiUO5QIbMhtTGY9G2XcTEMRw3ozCgQLjb0Fs4Zl5ra3JSmR8yrs1mquCsmTOqq2dea64eQIGTBvFlFbXSdS4QWGViLJTyHj7YyzpUeyaFmhcGp7PBpdwiRtPo69vRcirUtr4556vrawhX9I1zbsIsj+nBxLTamhCIZXNnzhT3k1Tt6z6xC03MtoPiFuzXgpKkElg1QdcPbJK8hYA7zXU2Ts+6awh6AhpBtPS6ALpkCqrgMaxsahlrR5SqUV3ttW14dA9C7OvZT0V667q3Fj+Rdx97FjxZok9l8gZNmK34MrF8wQj2oYC9+hCDANKiyxAj9Nq2TNa8O3STCchQH1NBzBqGxT1YRmNGHS9S3IqijgQ56rLh1hARhoj0/19INCCk+PtBORDWouMyAelobIQbLL0LkXDlAWw8ZcGsMWXGrdx2CWsjMMLiU8+tQEKEa16yDzAobR1oxf/tbj+JHCWogA2b+G4aQAKlNclQMCeiTWbFwLHfSPlyLH2VQJ3PYJfdkDGuxWS1OmjaZyZFxMTpp6CaoOWnKZKDOoQWsDGsbKH7kVaueUCYDOcHWGCJ/hg5lyKtrDbTaYgBlpsaaV29bnR4vqJLZA5dvTwUmNkMHIYRAdcTQJINcLvWjtMltK+XWEfLquYoAimT2oPHXMB/okMGpvMurB0OPDNZc0rCxFj9CY5dPjymDGpn9g7Q4lKMYSu1hXCrEnrTIbLHmEpUd2p4H3DpCXv1xzbAYSmRWj+sUrXn1DTlpsUc/5B10yLQtdYoFFD/m7JdQtGHo/3aETh0AWHP+grH40eCkwYcLFUaDTAFTVmxI8sE8Z6iYgZBAaKZDgww6l7npD3qQILTVDBucHicokEGH7MGUBLaefzmYCAPLg8LJIJdHDT2wFjPkmXrkpIVlOoLJwBCyhMGw+JHHMXNbCNQBoWTA9bWG9KAcxWBtlJy0QDJrrB+1ho6txY8reiWp514AJcLI7LF+1L6Un9CfGiJ/sHoIyKsHkanUXD6biCCvbgjZwvTu76SFkDmgc/l8HQ+2nrf+beheXru0fCOAzAi7xSV6C+lZPmlhXt039uRP5gMcZVkTDLA37E0DauPbs+lNptKVLPTecUsnFhLIoPgx98ur+5LJsCtZbOmwP4g9eWb1riXwJIORSwerPQK14cWPwXl1TzJQuuA0lcJeXIbdAnrW/u/n8Ow6j/24PNnSKTuGFT96kcGGHtcTkmBLJnvxY637mxFwX82Fay6/gBmdqznsQOORV/cgg7X9O4+UJLwKfhHcBHcnzZ3MCaOwPpOOfUsniI04q40zGUyLezb0QAjD0NgF+866qo0rmQM29PgmiSBky9VmBI1d9WwKekUbHTLvRWEGmQ7+9mEhvnMTz+2vcfseQ7GCGFD8yPem+cDiR6fbOpHB/RSDmmAyDJiz9OwBdn50+vouZDZ4SmpYmBu3dLIXP7rMMQ5kCogIBbdanGxOWrG05qkfwoEMdGEER4Urp8fychTP4kc5mUoUVqEo2ZogxL1e5J22YjK4fY9OJRLumnuPLvg8HfHTpGQwLR6w7y+iXSlLs0C8a4CQzBbu/alV9DqXbjYuVRsZmYpzqVeJmD+WvwrhI0VkTnV1WE8fy1+BsPhRQgZTyalq9xu6rVbIdnITkME6Rc3TP0rMDaV2Jsjy6s/JHMC51C/fl56hInLSnpIZLZLr5J+EOMqPbr/jRsYE0S4VT8kUeJiOhvj3AsjO6mmPBMatnvL5hvCPzF/FW5F5q+P03uqgw7c6gvKtDgfNmxZBD8v3OlD3rY46Tmpo/m4IyXsdD/5eB7endWyZ0ATSMxmFQu8/gXn3TEZlp/Q/gPPiPgo/M+5voNyYuzwcR3nP1GZQhuEjaeDjj+M7PfV9bNHx9Q3nd8HY5Qym+nYc+yVcqqYvZGrZofMX8RM//jkdS3/XlN/EtSrxetRXbRso/gau5StXMrVtbfkLuLUj3A5h86+MbhrUN0Unyr2qIwBncsDxeOlLjrQ5ZHnxrL/uC84CQ2h5qZBRy4n/Hqp7XPwHmR1sKs+e3O0AAAAASUVORK5CYII="
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 upDate. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footersection;
