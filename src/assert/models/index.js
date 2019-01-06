import React from "react"
import {
    findElementsInArr,
    range
} from "../../util/utils";

//////////////////////////////////////////  member

//////////////////////  horn
export const HornA = props => {
    let {colorOne = "rgb(246,241,218)", colorTwo = "rgb(242,218,166)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_dqnMenjCmaaH0S66Ze8Okqxyl4gqoGeZ">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_dqnMenjCmaaH0S66Ze8Okqxyl4gqoGeZ)">
                <g>
                    <path d=" M 64.062 88.544 L 46.505 87.585 L 67.033 20.134 L 86.495 89 L 64.062 88.544 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 64.062 88.544 L 46.505 87.585 L 53.034 66.162 C 59.725 66.568 66.507 67.961 73.188 70.421 C 76.42 71.609 79.505 73.022 82.438 74.594 L 86.495 89 L 64.062 88.544 Z "
                          fillRule="evenodd" fill={colorTwo}/>
                    <path d=" M 63.893 30.441 L 64.752 27.648 L 69.253 27.987 L 70.091 30.893 L 63.893 30.441 Z  M 61.976 36.804 L 62.797 34.067 L 71.492 35.933 L 72.384 39.049 L 61.976 36.804 Z  M 59.036 46.44 L 59.903 43.607 L 73.744 43.907 L 74.552 46.761 L 59.036 46.44 Z  M 56.47 54.884 L 57.299 52.107 L 76.47 53.508 L 77.284 56.428 L 56.47 54.884 Z  M 53.912 63.289 L 54.951 59.8 L 79.593 64.612 L 80.715 68.532 L 53.912 63.289 Z "
                          fillRule="evenodd" fill={colorTwo}/>
                </g>
            </g>
        </svg>
    )
};

export const HornB = props => {
    let {colorOne = "rgb(246,241,218)", colorTwo = "rgb(255,0,0)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_ae17IScGlQ44p4i4pOr53NBkRi2MwLLx">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_ae17IScGlQ44p4i4pOr53NBkRi2MwLLx)">
                <g>
                    <path d=" M 50.424 58.942 L 43.948 76.221 C 43.654 77.065 43.5 77.937 43.5 78.831 C 43.5 86.136 53.806 92.067 66.5 92.067 C 79.194 92.067 89.5 86.136 89.5 78.831 C 89.5 78.57 88.9 75.745 88.578 75.113 L 78.442 47.564 L 67.221 17.067 L 55.36 46.635 L 50.424 58.942 Z "
                          fill={colorTwo}/>
                    <path d=" M 47.106 81.492 C 45.687 79.087 46.504 75.994 48.909 74.598 C 51.314 73.202 54.407 74.018 55.803 76.424 C 57.22 78.83 56.404 81.922 54 83.318 C 51.594 84.714 48.502 83.898 47.106 81.492 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 74.687 73.98 C 73.849 72.542 74.322 70.673 75.782 69.835 C 77.22 68.998 79.068 69.491 79.906 70.93 C 80.743 72.369 80.271 74.238 78.811 75.075 C 77.371 75.913 75.524 75.418 74.687 73.98 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 72.796 61.224 C 72.194 60.193 72.538 58.883 73.568 58.282 C 74.602 57.702 75.909 58.046 76.49 59.055 C 77.092 60.085 76.748 61.395 75.717 61.997 C 74.707 62.598 73.398 62.233 72.796 61.224 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 54.51 87.936 C 53.908 86.905 54.252 85.595 55.282 84.994 C 56.316 84.414 57.623 84.758 58.204 85.767 C 58.806 86.797 58.462 88.107 57.431 88.709 C 56.421 89.31 55.112 88.945 54.51 87.936 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 86.048 68.238 L 82.63 58.947 C 82.026 59.04 81.43 59.245 80.871 59.569 C 78.466 60.965 77.649 64.058 79.068 66.463 C 80.464 68.869 83.556 69.685 85.962 68.289 C 85.991 68.272 86.02 68.255 86.048 68.238 Z "
                          fillRule="evenodd" fill={colorOne}/>
                </g>
            </g>
        </svg>
    )
};

export const HornC = props => {
    let {colorOne = "rgb(246,241,218)", colorTwo = "rgb(255,0,0)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_UZlT0S6BkfURGfBonKSyJuZB8XZ685YJ">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_UZlT0S6BkfURGfBonKSyJuZB8XZ685YJ)">
                <g>
                    <path d=" M 41.934 58.399 L 32.039 75.678 C 31.59 76.522 31.354 77.394 31.354 78.288 C 31.354 85.593 47.103 91.524 66.5 91.524 C 85.897 91.524 101.646 85.593 101.646 78.288 C 101.646 78.027 100.729 75.202 100.237 74.57 L 84.748 47.021 L 67.601 16.524 L 49.477 46.092 L 41.934 58.399 Z "
                          fill={colorOne}/>
                    <path d=" M 94.379 64.151 C 86.375 68.837 77.061 71.524 67.125 71.524 C 56.807 71.524 47.16 68.627 38.954 63.602 L 41.224 59.639 C 48.742 64.392 57.619 67.139 67.125 67.139 C 76.263 67.138 84.82 64.599 92.147 60.181 L 94.379 64.151 Z "
                          fillRule="evenodd" fill={colorTwo}/>
                    <path d=" M 99.35 72.992 C 89.533 79.037 77.976 82.524 65.612 82.524 C 53.776 82.524 42.68 79.328 33.141 73.753 L 35.84 69.04 C 44.563 74.283 54.743 77.293 65.612 77.293 C 77.022 77.292 87.674 73.974 96.678 68.239 L 99.35 72.992 Z "
                          fill={colorTwo}/>
                </g>
            </g>
        </svg>
    )
};

export const HornD = props => {
    let {colorOne = "rgb(246,241,218)", colorTwo = "rgb(255,0,0)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_jzY5Tf1JjmpG367ZPSnFajkRqOBRdqw6">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_jzY5Tf1JjmpG367ZPSnFajkRqOBRdqw6)">
                <g>
                    <path d=" M 82.284 28.284 C 83.522 34.619 86.188 40.518 88.822 46.439 C 85.28 44.883 81.63 43.6 77.788 42.798 C 77.662 37.562 78.448 31.832 82.284 28.284 Z "
                          fill="rgb(255,210,146)"/>
                    <path d=" M 93.573 58.326 C 94.52 61.305 95.154 64.502 95.387 67.704 C 93.583 65.975 91.77 64.219 89.909 62.499 C 90.614 58.893 90.91 55.138 90.968 51.389 C 91.925 53.672 92.826 55.974 93.573 58.326 Z "
                          fill="rgb(0,150,167)"/>
                    <path d=" M 77.791 42.991 C 77.79 42.927 77.79 42.862 77.788 42.798 C 81.63 43.599 85.281 44.884 88.821 46.438 C 89.552 48.083 90.274 49.732 90.969 51.39 C 90.909 55.139 90.613 58.894 89.91 62.499 C 86.264 59.126 82.425 55.896 78.032 53.33 C 78.245 49.923 77.888 46.424 77.791 42.991 Z "
                          fill="rgb(35,166,179)"/>
                    <path d=" M 82.1 78.665 C 83.976 81.953 85.731 85.32 87.406 88.719 C 84.915 90.526 82.008 91.711 79.086 92.709 C 78.103 93.044 77.106 93.338 76.11 93.637 C 75.058 90.802 73.895 88.021 72.609 85.309 C 73.737 84.725 74.858 84.103 75.968 83.424 C 78.361 82.058 80.384 80.454 82.1 78.665 Z "
                          fill="rgb(0,150,167)"/>
                    <path d=" M 73.135 65.242 C 76.491 69.442 79.422 73.973 82.1 78.666 C 80.384 80.453 78.361 82.057 75.968 83.424 C 74.858 84.103 73.737 84.725 72.607 85.31 C 70.288 80.419 67.557 75.757 64.27 71.432 C 67.647 69.854 70.745 67.832 73.135 65.242 Z "
                          fill="rgb(35,166,179)"/>
                    <path d=" M 72.608 85.309 C 73.894 88.021 75.059 90.802 76.111 93.637 C 65.734 96.76 54.769 97.926 43.972 96.997 C 42.988 96.913 41.938 96.784 41.193 96.136 C 40.433 95.478 40.162 94.43 39.944 93.449 C 39.7 92.355 39.483 91.256 39.271 90.155 C 50.314 92.224 61.854 90.877 72.608 85.309 Z "
                          fill="rgb(255,204,128)"/>
                    <path d=" M 39.272 90.155 C 38.446 85.865 37.852 81.531 37.514 77.174 C 43.221 76.866 48.9 76.053 54.465 74.752 C 57.76 73.981 61.135 72.896 64.269 71.431 C 67.557 75.756 70.288 80.42 72.609 85.309 C 61.853 90.877 50.313 92.224 39.272 90.155 Z "
                          fill="rgb(255,210,146)"/>
                    <path d=" M 89.91 62.499 C 91.769 64.219 93.583 65.975 95.388 67.704 C 95.958 75.481 94.114 83.289 88.235 88.091 C 87.965 88.31 87.686 88.516 87.407 88.719 C 85.731 85.32 83.975 81.953 82.1 78.665 C 86.388 74.194 88.726 68.56 89.91 62.499 Z "
                          fill="rgb(255,204,128)"/>
                    <path d=" M 77.054 58.746 C 77.643 56.987 77.917 55.171 78.033 53.33 C 82.426 55.896 86.263 59.126 89.91 62.499 C 88.726 68.56 86.388 74.194 82.1 78.666 C 79.422 73.973 76.491 69.442 73.135 65.242 C 74.855 63.378 76.221 61.233 77.054 58.746 Z "
                          fill="rgb(255,210,146)"/>
                </g>
            </g>
        </svg>
    )
};


//////////////////////  freckles
export const Freckles = props => {
    let {colorOne = "rgb(55,112,100)", colorTwo = "rgb(55,112,100)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_g2x8OqnFX39VNbujcBd1rHEuDDYgwA1c">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_g2x8OqnFX39VNbujcBd1rHEuDDYgwA1c)">
                <g>
                    <path d=" M 67.802 94.916 C 65.289 94.916 63.249 96.957 63.249 99.469 C 63.249 101.981 65.289 104 67.802 104 C 70.314 104 72.333 101.981 72.333 99.469 C 72.333 96.957 70.314 94.916 67.802 94.916 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 71.668 88.087 C 70.165 88.087 68.94 89.312 68.94 90.814 C 68.94 92.339 70.165 93.542 71.668 93.542 C 73.171 93.542 74.395 92.339 74.395 90.814 C 74.395 89.312 73.171 88.087 71.668 88.087 Z "
                          fillRule="evenodd" fill={colorTwo}/>
                    <path d=" M 54 88.892 C 52.927 88.892 52.067 89.752 52.067 90.825 C 52.067 91.878 52.927 92.736 54 92.736 C 55.074 92.736 55.933 91.878 55.933 90.825 C 55.933 89.752 55.074 88.892 54 88.892 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 80 100.156 C 78.927 100.156 78.067 101.016 78.067 102.089 C 78.067 103.142 78.927 104 80 104 C 81.074 104 81.933 103.142 81.933 102.089 C 81.933 101.016 81.074 100.156 80 100.156 Z "
                          fillRule="evenodd" fill={colorOne}/>
                </g>
            </g>
        </svg>
    )
};

export const FrecklesTwo = props => {
    let {colorOne = "rgb(55,112,100)", colorTwo = "rgb(55,112,100)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_g2x8OqnFX39VNbujcBd1rHEuDDYgwA1c">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_g2x8OqnFX39VNbujcBd1rHEuDDYgwA1c)">
                <g>
                    <path d=" M 67.802 94.916 C 65.289 94.916 63.249 96.957 63.249 99.469 C 63.249 101.981 65.289 104 67.802 104 C 70.314 104 72.333 101.981 72.333 99.469 C 72.333 96.957 70.314 94.916 67.802 94.916 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 71.668 88.087 C 70.165 88.087 68.94 89.312 68.94 90.814 C 68.94 92.339 70.165 93.542 71.668 93.542 C 73.171 93.542 74.395 92.339 74.395 90.814 C 74.395 89.312 73.171 88.087 71.668 88.087 Z "
                          fillRule="evenodd" fill={colorTwo}/>
                    <path d=" M 80 100.156 C 78.927 100.156 78.067 101.016 78.067 102.089 C 78.067 103.142 78.927 104 80 104 C 81.074 104 81.933 103.142 81.933 102.089 C 81.933 101.016 81.074 100.156 80 100.156 Z "
                          fillRule="evenodd" fill={colorOne}/>
                </g>
            </g>
        </svg>
    )
};


//////////////////////  eyes
export const EyesNormal = props => {
    let {
        c1 = "rgb(255,148,40)",
        c2 = "rgb(255,255,255)",
        c3 = "rgb(127,23,36)",
        colorOne ="rgb(144,148,40)"
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_CydxEMiv2J5Qz2UspmtEQqYwhcNF3GAD">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_CydxEMiv2J5Qz2UspmtEQqYwhcNF3GAD)">
                <g>
                    <path d=" M 66.483 41.911 C 82.527 41.911 95.544 54.929 95.544 70.975 C 95.544 87.016 82.527 100 66.483 100 C 50.471 100 37.456 87.016 37.456 70.975 C 37.456 54.929 50.471 41.911 66.483 41.911 Z "
                          fillRule="evenodd" fill={c1}/>
                    <path d=" M 66.483 44.871 C 80.912 44.871 92.616 56.543 92.616 70.974 C 92.616 85.368 80.912 97.074 66.483 97.074 C 52.088 97.074 40.382 85.368 40.382 70.974 C 40.382 56.543 52.088 44.871 66.483 44.871 Z "
                          fillRule="evenodd" fill={c2}/>
                    <path d=" M 66.483 50.017 C 78.087 50.017 87.471 59.402 87.471 70.975 C 87.471 82.544 78.087 91.93 66.483 91.93 C 54.913 91.93 45.528 82.544 45.528 70.975 C 45.528 59.402 54.913 50.017 66.483 50.017 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 66.483 56.239 C 74.622 56.239 81.214 62.833 81.214 70.974 C 81.214 79.079 74.622 85.671 66.483 85.671 C 58.378 85.671 51.784 79.079 51.784 70.974 C 51.784 62.833 58.378 56.239 66.483 56.239 Z "
                          fillRule="evenodd" fill={c3}/>
                    <path d=" M 62.278 58.866 C 65.81 58.866 68.67 61.722 68.67 65.254 C 68.67 68.787 65.81 71.679 62.278 71.679 C 58.748 71.679 55.854 68.787 55.854 65.254 C 55.854 61.722 58.748 58.866 62.278 58.866 Z "
                          fillRule="evenodd" fill={c2}/>
                </g>
            </g>
        </svg>
    )
};

export const EyesAngry = props => {
    let {
        c1 = "rgb(255,148,40)",
        c2 = "rgb(255,255,255)",
        c3 = "rgb(127,23,36)",
        colorOne ="rgb(144,148,40)"
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_b0PXwUglSO9VRqF1864yhySc5ZTQG193">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_b0PXwUglSO9VRqF1864yhySc5ZTQG193)">
                <g>
                    <path d=" M 94.778 63.838 C 94.838 64.596 94.868 65.363 94.868 66.137 C 94.868 82.178 81.851 95.162 65.807 95.162 C 49.796 95.162 36.781 82.178 36.781 66.137 C 36.781 65.363 36.811 64.596 36.87 63.838 L 94.778 63.838 Z "
                          fillRule="evenodd" fill={c1}/>
                    <path d=" M 91.841 63.838 C 91.907 64.595 91.941 65.362 91.941 66.136 C 91.941 80.53 80.237 92.236 65.807 92.236 C 51.412 92.236 39.706 80.53 39.706 66.136 C 39.706 65.362 39.74 64.595 39.806 63.838 L 91.841 63.838 Z "
                          fillRule="evenodd" fill={c2}/>
                    <path d=" M 86.671 63.838 C 86.754 64.593 86.796 65.36 86.796 66.137 C 86.796 77.706 77.411 87.092 65.807 87.092 C 54.238 87.092 44.853 77.706 44.853 66.137 C 44.853 65.36 44.895 64.593 44.978 63.838 L 86.671 63.838 Z "
                          fillRule="evenodd" fill={colorOne}/>
                    <path d=" M 80.361 63.838 C 80.478 64.587 80.539 65.354 80.539 66.136 C 80.539 74.241 73.947 80.833 65.807 80.833 C 57.702 80.833 51.108 74.241 51.108 66.136 C 51.108 65.354 51.169 64.587 51.286 63.838 L 80.361 63.838 Z "
                          fillRule="evenodd" fill={c3}/>
                    <path d=" M 59.312 60.292 C 61.584 60.292 63.424 62.13 63.424 64.403 C 63.424 66.676 61.584 68.536 59.312 68.536 C 57.04 68.536 55.178 66.676 55.178 64.403 C 55.178 62.13 57.04 60.292 59.312 60.292 Z "
                          fillRule="evenodd" fill={c2}/>
                    <rect x="24.105" y="59.139" width="84.79" height="4.699"
                          transform="matrix(1,0,0,1,0,0)" fill="rgb(255,148,40)"/>
                </g>
            </g>
        </svg>
    )
};

export const EyesClosed = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 133 135" width="133" height="135">
            <defs>
                <clipPath id="_clipPath_spVXyHVXfsTQds9gmueHYdsKR0Ug6X6i">
                    <rect width="133" height="135"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_spVXyHVXfsTQds9gmueHYdsKR0Ug6X6i)">
                <g>
                    <rect x="24.105" y="65.404" width="84.79" height="4.699"
                          transform="matrix(1,0,0,1,0,0)" fill="rgb(255,148,40)"/>
                    <rect x="50.945" y="72.452" width="33.105" height="4.699"
                          transform="matrix(1,0,0,1,0,0)" fill="rgb(255,148,40)"/>
                </g>
            </g>
        </svg>
    )
};

//////////////////////////////////////////  shape
export const Basic = props => {
    let {colorOne = "#333", colorTwo = "rgb(0,0,0)"} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 400 400" width="400" height="400">
            <defs>
                <clipPath id="_clipPath_LszNcNzHhklmHoQf16XjAIn70bVtok0o">
                    <rect width="400" height="400"/>
                </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_LszNcNzHhklmHoQf16XjAIn70bVtok0o)">
                <circle vectorEffect="non-scaling-stroke"
                        cx="199.99999999999983"
                        cy="199.99999999999983" r="191.99999999999977"
                        fill={colorOne} strokeWidth="7.6" stroke={colorTwo}
                        strokeLinejoin="round" strokeLinecap="butt"
                        strokeMiterlimit="1.414"/>
            </g>
        </svg>
    )
};

//////////////////////////////////////////  patten
const freckles = [<Freckles/>, <FrecklesTwo/>];
const horn = [<HornA/>, <HornB/>, <HornC/>,<HornD/>];
const THREE_DALL = [horn, freckles];


export function generateGrid(arrToDiscard) {
    arrToDiscard = arrToDiscard ? arrToDiscard : [];
    let map = range(9)
        .map((i)=> `d${(i+1)}`)
        .filter(i => !arrToDiscard.includes(i))
        .filter(i => i !== "d5");
    return findElementsInArr(map);
}

export function generateElements() {
    return findElementsInArr(THREE_DALL);
}

export function eyesManipulate(type) {
    let eyesType = new Map();
    eyesType.set("NORMAL", <EyesNormal/>);
    eyesType.set("ANGRY", <EyesAngry/>);
    eyesType.set("SLEEPY", <EyesClosed/>);
    return eyesType.get(type);
}