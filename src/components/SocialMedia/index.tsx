import React, { useState } from "react";
import './styles.css';

export default function SocialMedia() {

    //STATES
    const [activeButton, setActiveButton] = useState<string>('');

    //METHODS
    const handleActiveButton = (buttonName:string) => {
        setActiveButton(buttonName);
    }

    const handleInactiveButton = () => {
        setActiveButton('');
    }

    //JSX
    return (
        <div className={`social-media__container`}>
            <div className={`social-media__row-container`}>
                <a 
                    href="https://www.linkedin.com/in/hugo-felipe-riveros-fajardo-bb840292"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`social-media__icon-container linkedIn ${activeButton === 'linkedIn' ? 'linkedInActive' : undefined}`}
                    onMouseEnter={() => handleActiveButton('linkedIn')}
                    onMouseLeave={handleInactiveButton}
                >
                    <LinkedInIcon 
                        activeButton={activeButton}
                    />
                </a>
                <a 
                    href="https://www.instagram.com/hugo.riverosfajardo/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`social-media__icon-container instagram ${activeButton === 'instagram' ? 'instagramActive' : undefined}`}
                    onMouseEnter={() => handleActiveButton('instagram')}
                    onMouseLeave={handleInactiveButton}
                >
                    <InstagramIcon 
                        activeButton={activeButton}
                    />
                </a>
            </div>

            <div className={`social-media__row-container`}>
                <a 
                    href="https://github.com/hugoriveros18"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`social-media__icon-container github ${activeButton === 'github' ? 'githubActive' : undefined}`}
                    onMouseEnter={() => handleActiveButton('github')}
                    onMouseLeave={handleInactiveButton}
                >
                    <GithubIcon 
                        activeButton={activeButton}
                    />
                </a>
                <a 
                    href="https://twitter.com/HugoRiverosF18?s=09"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`social-media__icon-container twitter ${activeButton === 'twitter' ? 'twitterActive' : undefined}`}
                    onMouseEnter={() => handleActiveButton('twitter')}
                    onMouseLeave={handleInactiveButton}
                >
                    <TwitterIcon 
                        activeButton={activeButton}
                    />
                </a>
            </div>
            
        </div>
    )
}


const LinkedInIcon = ({activeButton}:IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 -2 44 44"
        className={`svg-linkedIn`}
    >
        <title>{"LinkedIn-color"}</title>
        <path
        fill={activeButton === 'linkedIn' ? '#ffffff' : '#007EBB'}
        fillRule="evenodd"
        d="M44 40h-9.725V25.938c0-3.68-1.52-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.249.586-.21 1.403-.21 2.22V40h-9.634s.124-24.909 0-27.173h9.634v4.265c.57-1.865 3.648-4.526 8.56-4.526C39.211 12.566 44 16.474 44 24.89V40ZM5.18 9.428h-.063C2.013 9.428 0 7.351 0 4.718 0 2.034 2.072 0 5.239 0c3.164 0 5.11 2.029 5.171 4.71 0 2.633-2.007 4.718-5.23 4.718Zm-4.07 3.399h8.576V40H1.11V12.827Z"
        />
    </svg>
)

const InstagramIcon = ({activeButton}:IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 20 20"
        className={`svg-instagram`}
    >
        <title>{"instagram [#167]"}</title>
        <path
        fill={activeButton === 'instagram' ? '#ffffff' : '#cc39a4'}
        fillRule="evenodd"
        d="M5.87.123C4.242.196 2.83.594 1.69 1.729.548 2.869.155 4.286.081 5.897.037 6.902-.231 14.498.545 16.49a5.04 5.04 0 0 0 2.91 2.903c.634.246 1.356.412 2.416.461 8.86.401 12.145.183 13.53-3.364.246-.631.415-1.353.462-2.41.405-8.883-.066-10.809-1.61-12.351C17.027.507 15.586-.325 5.87.123m.081 17.944c-.97-.043-1.496-.205-1.848-.341a3.255 3.255 0 0 1-1.888-1.883c-.591-1.514-.395-8.703-.342-9.866.051-1.14.282-2.18 1.086-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.973 2.628-11.779 2.224M14.09 4.69c0 .657.534 1.19 1.194 1.19.66 0 1.195-.533 1.195-1.19a1.194 1.194 0 0 0-2.39 0M4.864 9.988a5.103 5.103 0 0 0 5.11 5.097 5.103 5.103 0 0 0 5.109-5.097 5.102 5.102 0 0 0-5.11-5.096 5.102 5.102 0 0 0-5.11 5.096m1.794 0A3.313 3.313 0 0 1 9.972 6.68a3.313 3.313 0 0 1 3.317 3.308 3.313 3.313 0 0 1-3.317 3.31 3.313 3.313 0 0 1-3.316-3.31"
        />
    </svg>
)

const GithubIcon = ({activeButton}:IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 20 20"
      className={`svg-github`}
    >
      <title>{"github [#142]"}</title>
      <path
        fill={activeButton === 'github' ? '#ffffff' : '#000000'}
        fillRule="evenodd"
        d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
      />
    </svg>
)

const TwitterIcon = ({activeButton}:IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 -2 20 20"
      className={`svg-twitter`}
    >
      <title>{"twitter [#154]"}</title>
      <path
        fill={activeButton === 'twitter' ? '#ffffff' : '#03A9F4'}
        fillRule="evenodd"
        d="M6.29 16c7.547 0 11.675-6.156 11.675-11.495 0-.175 0-.349-.012-.522A8.265 8.265 0 0 0 20 1.89a8.273 8.273 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.293a8.303 8.303 0 0 1-2.606.98 4.153 4.153 0 0 0-5.806-.175 4.006 4.006 0 0 0-1.187 3.86A11.717 11.717 0 0 1 1.392.738 4.005 4.005 0 0 0 2.663 6.13 4.122 4.122 0 0 1 .8 5.625v.051C.801 7.6 2.178 9.255 4.092 9.636a4.144 4.144 0 0 1-1.852.069c.537 1.646 2.078 2.773 3.833 2.806A8.315 8.315 0 0 1 0 14.185a11.754 11.754 0 0 0 6.29 1.812"
      />
    </svg>
)

