import React from "react";

export default function Section1() {
  return (
    <React.Fragment>
      <main className="relative w-full py-16 bg-gradient-to-r from-green-100 to-yellow-200" id="undangan">
        <section className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div>
              <svg width="60" height="22" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.3415 3.824C16.3895 4.096 16.4215 4.288 16.4375 4.4C16.4695 4.496 16.4855 4.632 16.4855 4.808C16.4855 5.336 16.3655 5.832 16.1255 6.296C15.9015 6.744 15.5895 7.064 15.1895 7.256C14.8695 6.824 14.4775 6.456 14.0135 6.152C13.5495 5.832 13.0375 5.576 12.4775 5.384C11.9335 5.176 11.3655 5.024 10.7735 4.928C10.1815 4.832 9.60553 4.784 9.04553 4.784C8.48553 4.784 7.95753 4.832 7.46153 4.928C6.98153 5.008 6.54953 5.128 6.16553 5.288C5.79753 5.432 5.50153 5.616 5.27753 5.84C5.06953 6.064 4.96553 6.32 4.96553 6.608C5.01353 6.96 5.22953 7.32 5.61353 7.688C5.99753 8.04 6.46953 8.392 7.02953 8.744C7.58953 9.08 8.20553 9.416 8.87753 9.752C9.56553 10.088 10.2375 10.408 10.8935 10.712C11.7095 11.096 12.4135 11.456 13.0055 11.792C13.5975 12.112 14.0855 12.472 14.4695 12.872C14.8535 13.256 15.1415 13.696 15.3335 14.192C15.5255 14.688 15.6215 15.288 15.6215 15.992C15.6215 16.808 15.4855 17.576 15.2135 18.296C14.9415 19 14.5415 19.616 14.0135 20.144C13.5015 20.672 12.8775 21.08 12.1415 21.368C11.4055 21.672 10.5815 21.824 9.66953 21.824C8.77353 21.824 7.80553 21.688 6.76553 21.416C5.72553 21.144 4.74953 20.768 3.83753 20.288C2.94153 19.824 2.18953 19.288 1.58153 18.68C0.989531 18.056 0.693531 17.4 0.693531 16.712C0.693531 16.392 0.781531 15.984 0.957531 15.488C1.14953 14.992 1.48553 14.472 1.96553 13.928C2.01353 14.408 2.26953 14.976 2.73353 15.632C3.21353 16.288 3.92553 16.896 4.86953 17.456C5.74953 17.968 6.65353 18.344 7.58153 18.584C8.52553 18.808 9.40553 18.92 10.2215 18.92C11.1175 18.92 11.8455 18.808 12.4055 18.584C12.9655 18.36 13.4055 18.096 13.7255 17.792C14.0455 17.472 14.2695 17.152 14.3975 16.832C14.5255 16.512 14.5975 16.256 14.6135 16.064C14.5975 15.744 14.4455 15.44 14.1575 15.152C13.8855 14.848 13.5095 14.56 13.0295 14.288C12.5655 14 12.0215 13.712 11.3975 13.424C10.7735 13.136 10.1255 12.848 9.45353 12.56C8.44553 12.112 7.57353 11.696 6.83753 11.312C6.11753 10.912 5.51753 10.512 5.03753 10.112C4.57353 9.696 4.22953 9.264 4.00553 8.816C3.79753 8.368 3.69353 7.856 3.69353 7.28C3.69353 6.384 3.96553 5.536 4.50953 4.736C5.05353 3.936 5.83753 3.328 6.86153 2.912C7.37353 2.688 7.91753 2.528 8.49353 2.432C9.08553 2.336 9.66153 2.288 10.2215 2.288C11.2775 2.288 12.3095 2.432 13.3175 2.72C14.3255 3.008 15.3335 3.376 16.3415 3.824ZM25.7291 10.304C25.8891 10.304 26.0731 10.336 26.2811 10.4C26.5051 10.448 26.7051 10.52 26.8811 10.616C27.0571 10.696 27.2011 10.784 27.3131 10.88C27.4411 10.976 27.5051 11.064 27.5051 11.144C27.1851 11.816 26.8891 12.496 26.6171 13.184C26.3451 13.856 26.1131 14.504 25.9211 15.128C25.7291 15.752 25.5771 16.336 25.4651 16.88C25.3691 17.424 25.3211 17.896 25.3211 18.296C25.3211 18.744 25.3691 19.12 25.4651 19.424C25.5611 19.712 25.7211 19.92 25.9451 20.048C25.7531 20.176 25.5051 20.28 25.2011 20.36C24.8971 20.44 24.6251 20.48 24.3851 20.48C23.5211 20.48 23.0891 19.888 23.0891 18.704C23.0891 17.792 23.3931 16.544 24.0011 14.96C23.6811 15.696 23.3131 16.392 22.8971 17.048C22.4811 17.688 22.0571 18.256 21.6251 18.752C21.1931 19.248 20.7531 19.656 20.3051 19.976C19.8731 20.28 19.4731 20.464 19.1051 20.528C18.5131 20.496 18.0331 20.216 17.6651 19.688C17.2971 19.144 17.1131 18.456 17.1131 17.624C17.1131 16.728 17.3051 15.784 17.6891 14.792C18.0731 13.8 18.5611 12.88 19.1531 12.032C19.7611 11.184 20.4171 10.48 21.1211 9.92C21.8251 9.344 22.5051 9.04 23.1611 9.008C23.3211 9.056 23.4971 9.152 23.6891 9.296C23.8971 9.44 24.0891 9.608 24.2651 9.8C24.4571 9.992 24.6171 10.192 24.7451 10.4C24.8731 10.592 24.9451 10.76 24.9611 10.904C24.3211 11 23.6571 11.312 22.9691 11.84C22.2971 12.368 21.6811 13.008 21.1211 13.76C20.5771 14.496 20.1291 15.288 19.7771 16.136C19.4251 16.984 19.2491 17.776 19.2491 18.512C19.2491 18.816 19.3611 19.008 19.5851 19.088C20.0491 18.992 20.5851 18.6 21.1931 17.912C21.8011 17.208 22.5371 16.128 23.4011 14.672C23.5611 14.384 23.7371 14.064 23.9291 13.712C24.1371 13.36 24.3451 12.992 24.5531 12.608C24.7611 12.224 24.9611 11.84 25.1531 11.456C25.3611 11.056 25.5531 10.672 25.7291 10.304ZM30.743 20.168C31.479 19.672 32.199 19.04 32.903 18.272C33.607 17.488 34.247 16.648 34.823 15.752C35.399 14.84 35.887 13.896 36.287 12.92C36.687 11.944 36.959 11.008 37.103 10.112C37.103 9.92 36.999 9.792 36.791 9.728C36.567 9.728 36.255 9.928 35.855 10.328C35.471 10.712 35.039 11.208 34.559 11.816C34.095 12.424 33.615 13.104 33.119 13.856C32.639 14.608 32.199 15.36 31.799 16.112C31.399 16.848 31.055 17.544 30.767 18.2C30.495 18.84 30.343 19.36 30.311 19.76C30.151 19.76 30.015 19.6 29.903 19.28C29.871 19.2 29.815 19.12 29.735 19.04C29.655 18.944 29.527 18.832 29.351 18.704C29.271 18.64 29.191 18.568 29.111 18.488C29.031 18.392 28.975 18.312 28.943 18.248C28.879 18.12 28.847 17.912 28.847 17.624C28.847 16.68 28.967 15.616 29.207 14.432C29.447 13.248 29.759 12.04 30.143 10.808C30.543 9.576 31.007 8.368 31.535 7.184C32.063 5.984 32.607 4.888 33.167 3.896C33.743 2.904 34.319 2.064 34.895 1.376C35.471 0.687999 36.015 0.231998 36.527 0.00799847C36.687 0.0559988 36.879 0.135999 37.103 0.248C37.327 0.359999 37.551 0.487999 37.775 0.631999C37.999 0.775999 38.207 0.919999 38.399 1.064C38.607 1.208 38.759 1.336 38.855 1.448C37.095 2.872 35.567 4.704 34.271 6.944C32.991 9.168 31.943 11.8 31.127 14.84C31.575 14.008 32.079 13.208 32.639 12.44C33.199 11.656 33.751 10.968 34.295 10.376C34.855 9.784 35.383 9.312 35.879 8.96C36.391 8.608 36.815 8.432 37.151 8.432C37.407 8.496 37.655 8.608 37.895 8.768C38.135 8.928 38.351 9.128 38.543 9.368C38.735 9.592 38.895 9.84 39.023 10.112C39.151 10.368 39.231 10.64 39.263 10.928C39.247 11.6 39.127 12.32 38.903 13.088C38.695 13.84 38.407 14.584 38.039 15.32C37.687 16.056 37.279 16.76 36.815 17.432C36.367 18.104 35.887 18.696 35.375 19.208C34.879 19.704 34.375 20.104 33.863 20.408C33.367 20.712 32.895 20.864 32.447 20.864C32.255 20.864 32.055 20.84 31.847 20.792C31.655 20.76 31.471 20.704 31.295 20.624C31.135 20.56 30.999 20.488 30.887 20.408C30.791 20.328 30.743 20.248 30.743 20.168ZM41.1776 10.808C41.0976 10.712 41.0256 10.512 40.9616 10.208C40.8976 9.888 40.8656 9.616 40.8656 9.392C41.2816 9.424 41.6816 9.456 42.0656 9.488C42.4496 9.504 42.8016 9.52 43.1216 9.536C43.3616 9.056 43.6176 8.584 43.8896 8.12C44.1776 7.64 44.4496 7.208 44.7056 6.824C44.9776 6.424 45.2256 6.088 45.4496 5.816C45.6896 5.544 45.8736 5.368 46.0016 5.288C46.1616 5.288 46.3616 5.32 46.6016 5.384C46.8576 5.432 47.1136 5.504 47.3696 5.6C47.6256 5.68 47.8576 5.768 48.0656 5.864C48.2736 5.96 48.4176 6.056 48.4976 6.152C48.0176 6.76 47.6016 7.328 47.2496 7.856C46.9136 8.368 46.5456 8.96 46.1456 9.632C46.4656 9.632 46.7856 9.624 47.1056 9.608C47.4416 9.592 47.7776 9.568 48.1136 9.536C48.1936 9.616 48.2576 9.72 48.3056 9.848C48.3536 9.96 48.3776 10.08 48.3776 10.208C47.5936 10.496 46.6416 10.656 45.5216 10.688C45.1216 11.456 44.7616 12.224 44.4416 12.992C44.1376 13.744 43.8736 14.472 43.6496 15.176C43.4416 15.88 43.2736 16.544 43.1456 17.168C43.0336 17.792 42.9776 18.352 42.9776 18.848C42.9776 19.552 43.2416 19.944 43.7696 20.024C44.2496 19.96 44.7056 19.84 45.1376 19.664C45.5696 19.488 45.9536 19.264 46.2896 18.992C46.3856 19.136 46.4416 19.256 46.4576 19.352C46.3616 19.496 46.1936 19.664 45.9536 19.856C45.7296 20.048 45.4816 20.232 45.2096 20.408C44.9376 20.6 44.6736 20.76 44.4176 20.888C44.1616 21.016 43.9696 21.088 43.8416 21.104C43.4416 21.088 43.0416 21 42.6416 20.84C42.2416 20.68 41.8736 20.48 41.5376 20.24C41.2176 20 40.9536 19.736 40.7456 19.448C40.5376 19.144 40.4336 18.848 40.4336 18.56C40.4336 18.176 40.4816 17.696 40.5776 17.12C40.6896 16.528 40.8416 15.888 41.0336 15.2C41.2256 14.512 41.4496 13.792 41.7056 13.04C41.9616 12.288 42.2416 11.544 42.5456 10.808H41.1776ZM54.7271 19.472C54.4231 19.216 54.2151 18.896 54.1031 18.512C54.0071 18.128 53.9591 17.8 53.9591 17.528C53.9591 17.192 53.9991 16.904 54.0791 16.664C54.0151 16.664 53.8711 16.792 53.6471 17.048C53.4231 17.304 53.1751 17.608 52.9031 17.96C52.6471 18.312 52.3911 18.656 52.1351 18.992C51.8791 19.328 51.6871 19.576 51.5591 19.736C51.3511 19.96 51.1511 20.136 50.9591 20.264C50.7831 20.392 50.6391 20.464 50.5271 20.48C50.2711 20.464 49.9991 20.408 49.7111 20.312C49.4391 20.232 49.1751 20.112 48.9191 19.952C48.6791 19.792 48.4631 19.6 48.2711 19.376C48.0951 19.152 47.9751 18.896 47.9111 18.608C47.9111 18.16 47.9191 17.792 47.9351 17.504C47.9671 17.216 48.0231 16.904 48.1031 16.568C48.2471 15.96 48.4551 15.272 48.7271 14.504C49.0151 13.736 49.3431 12.984 49.7111 12.248C50.0791 11.496 50.4871 10.8 50.9351 10.16C51.3991 9.504 51.8871 8.992 52.3991 8.624C52.5431 8.624 52.7111 8.64 52.9031 8.672C53.0951 8.688 53.2871 8.728 53.4791 8.792C53.6871 8.856 53.8791 8.936 54.0551 9.032C54.2471 9.112 54.4071 9.224 54.5351 9.368C54.3911 9.528 54.0231 10.064 53.4311 10.976C52.8551 11.888 52.2071 13.2 51.4871 14.912C51.4071 15.088 51.3111 15.344 51.1991 15.68C51.0871 16.016 50.9751 16.368 50.8631 16.736C50.7511 17.104 50.6551 17.464 50.5751 17.816C50.5111 18.168 50.4791 18.448 50.4791 18.656C50.4791 18.784 50.4951 18.88 50.5271 18.944C50.5751 19.008 50.6151 19.056 50.6471 19.088C50.8871 18.992 51.1911 18.728 51.5591 18.296C51.9271 17.864 52.4391 17.2 53.0951 16.304C53.2551 16.08 53.4391 15.824 53.6471 15.536C53.8711 15.248 54.0951 14.944 54.3191 14.624C54.5431 14.288 54.7511 13.944 54.9431 13.592C55.1511 13.24 55.3191 12.888 55.4471 12.536C55.5111 12.344 55.5911 12.12 55.6871 11.864C55.7991 11.592 55.9271 11.312 56.0711 11.024C56.2311 10.736 56.4071 10.448 56.5991 10.16C56.8071 9.856 57.0471 9.576 57.3191 9.32C57.5271 9.32 57.7511 9.344 57.9911 9.392C58.2311 9.44 58.4551 9.504 58.6631 9.584C58.8871 9.648 59.0791 9.728 59.2391 9.824C59.3991 9.904 59.5191 9.992 59.5991 10.088C59.3111 10.792 58.9911 11.488 58.6391 12.176C58.2871 12.864 57.9591 13.544 57.6551 14.216C57.3511 14.872 57.0951 15.528 56.8871 16.184C56.6791 16.84 56.5751 17.48 56.5751 18.104C56.5751 18.44 56.5991 18.736 56.6471 18.992C56.7111 19.232 56.7751 19.44 56.8391 19.616C56.9031 19.776 56.9591 19.912 57.0071 20.024C57.0711 20.136 57.1031 20.232 57.1031 20.312C57.1031 20.328 57.0871 20.352 57.0551 20.384C57.0391 20.4 57.0231 20.408 57.0071 20.408C56.8951 20.408 56.7511 20.384 56.5751 20.336C56.3991 20.288 56.1991 20.216 55.9751 20.12C55.7671 20.04 55.5511 19.944 55.3271 19.832C55.1191 19.72 54.9191 19.6 54.7271 19.472Z"
                  fill="black"
                />
              </svg>
              <div className="flex mt-3 justify-center">
                <svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.186 42.392C23.594 42.392 24.682 42.7547 25.45 43.48C26.2607 44.1627 26.666 45.1227 26.666 46.36C26.666 46.7013 26.6233 47.0427 26.538 47.384C26.4953 47.768 26.4313 48.088 26.346 48.344C25.7913 48.2587 25.1727 48.1733 24.49 48.088C23.8073 48.0453 22.9967 48.024 22.058 48.024C20.778 48.024 19.4553 48.1093 18.09 48.28C16.7673 48.4507 15.466 48.6213 14.186 48.792C12.906 49.0053 11.6687 49.1973 10.474 49.368C9.27933 49.5387 8.17 49.624 7.146 49.624C5.482 49.624 4.05267 49.304 2.858 48.664C1.66333 48.024 0.852667 47.1493 0.426 46.04C0.596667 45.8693 1.002 45.6987 1.642 45.528C2.32467 45.3147 3.13533 45.1013 4.074 44.888C5.05533 44.632 6.14333 44.3973 7.338 44.184C8.57533 43.9707 9.834 43.7573 11.114 43.544C11.7113 40.984 12.3727 38.36 13.098 35.672C13.866 32.9413 14.634 30.232 15.402 27.544C16.2127 24.8133 17.0447 22.1253 17.898 19.48C18.7513 16.8347 19.6047 14.2747 20.458 11.8C19.0073 12.4827 17.4927 13.4 15.914 14.552C14.378 15.6613 13.0553 16.7067 11.946 17.688C11.4767 17.432 11.242 16.856 11.242 15.96C12.8207 13.8267 14.4207 11.928 16.042 10.264C17.6633 8.6 19.4553 6.82933 21.418 4.952C21.8873 4.48266 22.442 3.82133 23.082 2.968C23.7647 2.11467 24.3407 1.26133 24.81 0.407997C25.4073 0.578664 26.154 0.770664 27.05 0.983997C27.946 1.15466 28.8207 1.38933 29.674 1.688C30.57 1.944 31.3593 2.264 32.042 2.648C32.7673 3.032 33.258 3.48 33.514 3.992C32.9593 4.46133 32.4473 4.952 31.978 5.464C31.5513 5.976 31.1673 6.53067 30.826 7.128C29.9727 8.664 28.97 10.8187 27.818 13.592C26.7087 16.3227 25.5567 19.3307 24.362 22.616C23.21 25.8587 22.0367 29.2507 20.842 32.792C19.69 36.2907 18.6447 39.576 17.706 42.648C18.602 42.5627 19.4127 42.4987 20.138 42.456C20.906 42.4133 21.5887 42.392 22.186 42.392ZM37.5125 22.616C38.0672 21.08 38.8138 19.3093 39.7525 17.304C40.7338 15.2987 41.7365 13.3147 42.7605 11.352C43.8272 9.34666 44.8725 7.46933 45.8965 5.72C46.9205 3.97066 47.7952 2.60533 48.5205 1.624C49.3738 1.96533 50.3125 2.43466 51.3365 3.032C52.3605 3.58666 53.2992 4.26933 54.1525 5.08C54.7498 5.03733 55.5818 4.93067 56.6485 4.76C57.7578 4.54667 58.8885 4.33333 60.0405 4.12C61.1925 3.864 62.2805 3.62933 63.3045 3.416C64.3712 3.16 65.1605 2.94666 65.6725 2.776C67.1232 3.45867 68.2538 4.48267 69.0645 5.848C69.8752 7.21333 70.6218 8.87733 71.3045 10.84C68.7018 10.1573 65.9285 9.624 62.9845 9.24C60.0832 8.856 57.2458 8.664 54.4725 8.664C53.5765 9.432 52.7018 10.3493 51.8485 11.416C51.0378 12.4827 50.2698 13.592 49.5445 14.744C48.8192 15.8533 48.1578 16.92 47.5605 17.944C47.0058 18.968 46.5365 19.8427 46.1525 20.568C47.6458 19.9707 49.1818 19.672 50.7605 19.672C52.2112 19.672 53.5338 19.9493 54.7285 20.504C55.9232 21.0587 56.9472 21.8267 57.8005 22.808C58.6538 23.7893 59.3152 24.9413 59.7845 26.264C60.2538 27.544 60.4885 28.952 60.4885 30.488C60.4885 32.8347 59.7632 35.1387 58.3125 37.4C56.8618 39.6187 54.9845 41.6027 52.6805 43.352C50.3765 45.1013 47.7952 46.5093 44.9365 47.576C42.1205 48.6853 39.3045 49.2613 36.4885 49.304C35.4645 49.0907 34.4192 48.4933 33.3525 47.512C32.2858 46.5307 31.5178 45.1867 31.0485 43.48C32.6272 43.4373 34.3338 43.2453 36.1685 42.904C38.0032 42.52 39.8378 41.9867 41.6725 41.304C43.5498 40.6213 45.3418 39.8107 47.0485 38.872C48.7552 37.8907 50.2698 36.824 51.5925 35.672C52.9152 34.52 53.9605 33.2827 54.7285 31.96C55.5392 30.5947 55.9445 29.1653 55.9445 27.672C55.9445 25.0693 54.4725 23.768 51.5285 23.768C50.1632 23.768 48.7552 23.9813 47.3045 24.408C45.8538 24.8347 44.4885 25.4747 43.2085 26.328C42.2698 25.9867 41.2245 25.496 40.0725 24.856C38.9632 24.216 38.1098 23.4693 37.5125 22.616Z"
                    fill="black"
                  />
                </svg>
                <div>
                  <svg width="48" height="22" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.6662 0.263999C12.2742 0.263999 12.9062 0.375999 13.5622 0.599999C14.2182 0.823999 14.7942 1.112 15.2902 1.464C15.1302 2.28 14.9782 3.016 14.8342 3.672C14.7062 4.328 14.5862 4.928 14.4742 5.472C14.3622 6 14.2502 6.488 14.1382 6.936C14.0422 7.368 13.9462 7.776 13.8502 8.16C13.4662 9.6 13.0662 10.904 12.6502 12.072C12.2502 13.224 11.8182 14.264 11.3542 15.192C10.9062 16.12 10.4262 16.944 9.91419 17.664C9.41819 18.384 8.88219 19.016 8.30619 19.56C7.74619 20.088 7.18619 20.52 6.62619 20.856C6.06619 21.192 5.54619 21.408 5.06619 21.504C4.42619 21.504 3.83419 21.432 3.29019 21.288C2.74619 21.144 2.27419 20.944 1.87419 20.688C1.49019 20.448 1.18619 20.152 0.962188 19.8C0.754188 19.464 0.650188 19.088 0.650188 18.672C0.650188 18.224 0.762188 17.664 0.986188 16.992C1.21019 16.304 1.55419 15.496 2.01819 14.568C2.21019 14.584 2.43419 14.632 2.69019 14.712C2.94619 14.792 3.20219 14.888 3.45819 15C3.71419 15.112 3.94619 15.24 4.15419 15.384C4.36219 15.512 4.51419 15.64 4.61019 15.768C4.09819 16.296 3.68219 16.88 3.36219 17.52C3.04219 18.144 2.88219 18.688 2.88219 19.152C2.88219 19.424 2.93019 19.664 3.02619 19.872C3.13819 20.096 3.32219 20.296 3.57819 20.472C4.55419 20.104 5.50619 19.416 6.43419 18.408C7.36219 17.416 8.18619 16.176 8.90619 14.688C9.33819 13.808 9.73019 12.8 10.0822 11.664C10.4342 10.528 10.7302 9.392 10.9702 8.256C11.2262 7.104 11.4182 6.008 11.5462 4.968C11.6902 3.912 11.7622 3.024 11.7622 2.304C11.7622 2.192 11.7542 2.04 11.7382 1.848C11.7382 1.64 11.7302 1.432 11.7142 1.224C11.7142 0.999999 11.7062 0.799999 11.6902 0.623999C11.6742 0.447999 11.6662 0.328 11.6662 0.263999ZM21.1216 17.472C20.8176 17.216 20.6096 16.896 20.4976 16.512C20.4016 16.128 20.3536 15.8 20.3536 15.528C20.3536 15.192 20.3936 14.904 20.4736 14.664C20.4096 14.664 20.2656 14.792 20.0416 15.048C19.8176 15.304 19.5696 15.608 19.2976 15.96C19.0416 16.312 18.7856 16.656 18.5296 16.992C18.2736 17.328 18.0816 17.576 17.9536 17.736C17.7456 17.96 17.5456 18.136 17.3536 18.264C17.1776 18.392 17.0336 18.464 16.9216 18.48C16.6656 18.464 16.3936 18.408 16.1056 18.312C15.8336 18.232 15.5696 18.112 15.3136 17.952C15.0736 17.792 14.8576 17.6 14.6656 17.376C14.4896 17.152 14.3696 16.896 14.3056 16.608C14.3056 16.16 14.3136 15.792 14.3296 15.504C14.3616 15.216 14.4176 14.904 14.4976 14.568C14.6416 13.96 14.8496 13.272 15.1216 12.504C15.4096 11.736 15.7376 10.984 16.1056 10.248C16.4736 9.496 16.8816 8.8 17.3296 8.16C17.7936 7.504 18.2816 6.992 18.7936 6.624C18.9376 6.624 19.1056 6.64 19.2976 6.672C19.4896 6.688 19.6816 6.728 19.8736 6.792C20.0816 6.856 20.2736 6.936 20.4496 7.032C20.6416 7.112 20.8016 7.224 20.9296 7.368C20.7856 7.528 20.4176 8.064 19.8256 8.976C19.2496 9.888 18.6016 11.2 17.8816 12.912C17.8016 13.088 17.7056 13.344 17.5936 13.68C17.4816 14.016 17.3696 14.368 17.2576 14.736C17.1456 15.104 17.0496 15.464 16.9696 15.816C16.9056 16.168 16.8736 16.448 16.8736 16.656C16.8736 16.784 16.8896 16.88 16.9216 16.944C16.9696 17.008 17.0096 17.056 17.0416 17.088C17.2816 16.992 17.5856 16.728 17.9536 16.296C18.3216 15.864 18.8336 15.2 19.4896 14.304C19.6496 14.08 19.8336 13.824 20.0416 13.536C20.2656 13.248 20.4896 12.944 20.7136 12.624C20.9376 12.288 21.1456 11.944 21.3376 11.592C21.5456 11.24 21.7136 10.888 21.8416 10.536C21.9056 10.344 21.9856 10.12 22.0816 9.864C22.1936 9.592 22.3216 9.312 22.4656 9.024C22.6256 8.736 22.8016 8.448 22.9936 8.16C23.2016 7.856 23.4416 7.576 23.7136 7.32C23.9216 7.32 24.1456 7.344 24.3856 7.392C24.6256 7.44 24.8496 7.504 25.0576 7.584C25.2816 7.648 25.4736 7.728 25.6336 7.824C25.7936 7.904 25.9136 7.992 25.9936 8.088C25.7056 8.792 25.3856 9.488 25.0336 10.176C24.6816 10.864 24.3536 11.544 24.0496 12.216C23.7456 12.872 23.4896 13.528 23.2816 14.184C23.0736 14.84 22.9696 15.48 22.9696 16.104C22.9696 16.44 22.9936 16.736 23.0416 16.992C23.1056 17.232 23.1696 17.44 23.2336 17.616C23.2976 17.776 23.3536 17.912 23.4016 18.024C23.4656 18.136 23.4976 18.232 23.4976 18.312C23.4976 18.328 23.4816 18.352 23.4496 18.384C23.4336 18.4 23.4176 18.408 23.4016 18.408C23.2896 18.408 23.1456 18.384 22.9696 18.336C22.7936 18.288 22.5936 18.216 22.3696 18.12C22.1616 18.04 21.9456 17.944 21.7216 17.832C21.5136 17.72 21.3136 17.6 21.1216 17.472ZM30.341 6.36C30.757 6.488 31.149 6.776 31.517 7.224C31.885 7.656 32.157 8.136 32.333 8.664C32.157 9.096 31.885 9.616 31.517 10.224C31.149 10.832 30.781 11.456 30.413 12.096C30.045 12.72 29.709 13.32 29.405 13.896C29.117 14.456 28.949 14.92 28.901 15.288C29.157 15.016 29.437 14.704 29.741 14.352C30.061 13.984 30.365 13.624 30.653 13.272C30.957 12.904 31.237 12.576 31.493 12.288C31.749 11.984 31.949 11.76 32.093 11.616C32.397 11.296 32.757 10.928 33.173 10.512C33.589 10.08 34.021 9.68 34.469 9.312C34.933 8.928 35.397 8.608 35.861 8.352C36.325 8.08 36.749 7.944 37.133 7.944C37.549 7.944 37.893 8.088 38.165 8.376C38.453 8.648 38.677 8.936 38.837 9.24C38.837 9.272 38.773 9.32 38.645 9.384C38.533 9.432 38.365 9.584 38.141 9.84C37.917 10.128 37.661 10.528 37.373 11.04C37.101 11.536 36.829 12.08 36.557 12.672C36.301 13.248 36.085 13.84 35.909 14.448C35.733 15.056 35.645 15.608 35.645 16.104C35.645 16.504 35.693 16.76 35.789 16.872C35.901 16.984 36.053 17.04 36.245 17.04C36.421 17.04 36.605 17 36.797 16.92C36.989 16.84 37.141 16.8 37.253 16.8C37.317 16.832 37.365 16.904 37.397 17.016C37.445 17.112 37.469 17.2 37.469 17.28C37.341 17.392 37.189 17.504 37.013 17.616C36.837 17.728 36.653 17.832 36.461 17.928C36.269 18.024 36.077 18.104 35.885 18.168C35.709 18.232 35.549 18.264 35.405 18.264C34.941 18.264 34.557 18.192 34.253 18.048C33.965 17.92 33.733 17.744 33.557 17.52C33.397 17.296 33.285 17.032 33.221 16.728C33.157 16.408 33.125 16.072 33.125 15.72C33.125 15.528 33.141 15.312 33.173 15.072C33.205 14.832 33.269 14.552 33.365 14.232C33.461 13.896 33.597 13.504 33.773 13.056C33.949 12.592 34.173 12.04 34.445 11.4C34.413 11.4 34.197 11.512 33.797 11.736C33.397 11.96 32.965 12.304 32.501 12.768C31.749 13.488 31.069 14.2 30.461 14.904C29.869 15.608 29.261 16.392 28.637 17.256C28.285 17.752 27.973 18.168 27.701 18.504C27.445 18.856 27.221 19.088 27.029 19.2C26.693 19.008 26.445 18.736 26.285 18.384C26.125 18.048 26.005 17.696 25.925 17.328C25.925 17.024 25.965 16.64 26.045 16.176C26.141 15.712 26.261 15.2 26.405 14.64C26.565 14.064 26.757 13.464 26.981 12.84C27.205 12.216 27.453 11.592 27.725 10.968C28.333 9.56 28.885 8.456 29.381 7.656C29.893 6.856 30.213 6.424 30.341 6.36ZM39.4379 16.392C39.4379 16.248 39.4459 16.072 39.4619 15.864C39.4939 15.64 39.5419 15.352 39.6059 15C39.6699 14.632 39.7499 14.192 39.8459 13.68C39.9579 13.168 40.0939 12.552 40.2539 11.832C40.2859 11.672 40.3579 11.416 40.4699 11.064C40.5819 10.712 40.7259 10.344 40.9019 9.96C41.0939 9.56 41.3179 9.176 41.5739 8.808C41.8459 8.44 42.1659 8.168 42.5339 7.992C42.8059 8.056 43.1659 8.224 43.6139 8.496C44.0619 8.752 44.4459 9.112 44.7659 9.576C44.3979 9.992 44.0859 10.408 43.8299 10.824C43.5899 11.24 43.3659 11.672 43.1579 12.12C42.9659 12.568 42.7819 13.032 42.6059 13.512C42.4459 13.992 42.2619 14.496 42.0539 15.024C41.8779 15.472 41.7179 15.936 41.5739 16.416C41.4299 16.88 41.3499 17.288 41.3339 17.64C41.3339 17.928 41.3259 18.128 41.3099 18.24C41.3099 18.368 41.2699 18.432 41.1899 18.432C41.1259 18.432 40.9979 18.392 40.8059 18.312C40.6139 18.232 40.4139 18.112 40.2059 17.952C40.0139 17.776 39.8379 17.56 39.6779 17.304C39.5179 17.048 39.4379 16.744 39.4379 16.392ZM44.0219 5.976C44.0219 5.88 44.0459 5.736 44.0939 5.544C44.0139 5.464 43.9419 5.344 43.8779 5.184C43.8299 5.024 43.8059 4.88 43.8059 4.752C43.8059 4.608 43.8219 4.416 43.8539 4.176C43.9019 3.92 43.9579 3.648 44.0219 3.36C44.0859 3.072 44.1659 2.776 44.2619 2.472C44.3579 2.152 44.4539 1.864 44.5499 1.608C44.7419 1.608 44.9739 1.664 45.2459 1.776C45.5339 1.872 45.8219 2.008 46.1099 2.184C46.3979 2.344 46.6619 2.528 46.9019 2.736C47.1419 2.928 47.3259 3.112 47.4539 3.288C47.2779 3.464 47.0459 3.712 46.7579 4.032C46.4699 4.336 46.1899 4.664 45.9179 5.016C45.6459 5.352 45.3979 5.672 45.1739 5.976C44.9499 6.28 44.8059 6.496 44.7419 6.624C44.5499 6.592 44.3819 6.512 44.2379 6.384C44.0939 6.24 44.0219 6.104 44.0219 5.976Z"
                      fill="black"
                    />
                  </svg>
                  <svg className="mt-2" width="59" height="20" viewBox="0 0 59 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8316 4.608C13.8316 5.376 13.6556 6.12 13.3036 6.84C12.9676 7.56 12.4956 8.28 11.8876 9C11.2796 9.72 10.5516 10.464 9.70356 11.232C8.87156 11.984 7.96756 12.784 6.99156 13.632C6.54356 14.016 6.15956 14.36 5.83956 14.664C5.53556 14.968 5.27156 15.264 5.04756 15.552C4.82356 15.824 4.62356 16.096 4.44756 16.368C4.28756 16.624 4.13556 16.904 3.99156 17.208C5.27156 17.128 6.54356 16.84 7.80756 16.344C9.08756 15.848 10.1836 15.2 11.0956 14.4C11.1596 14.48 11.2396 14.608 11.3356 14.784C11.4316 14.944 11.5116 15.136 11.5756 15.36C11.6556 15.568 11.7196 15.8 11.7676 16.056C11.8316 16.296 11.8636 16.536 11.8636 16.776C11.8636 17.176 11.7756 17.52 11.5996 17.808C11.4396 17.984 11.2076 18.12 10.9036 18.216C10.6156 18.312 10.2716 18.384 9.87156 18.432C9.47156 18.48 9.03956 18.512 8.57556 18.528C8.11156 18.544 7.63156 18.552 7.13556 18.552C6.65556 18.552 6.17556 18.56 5.69556 18.576C5.21556 18.608 4.75156 18.648 4.30356 18.696C3.87156 18.76 3.46356 18.848 3.07956 18.96C2.71156 19.072 2.39956 19.224 2.14356 19.416C1.75956 19.24 1.40756 18.976 1.08756 18.624C0.783563 18.288 0.567563 17.92 0.439563 17.52C0.535563 17.056 0.703563 16.624 0.943563 16.224C1.18356 15.824 1.50356 15.408 1.90356 14.976C2.31956 14.544 2.83156 14.08 3.43956 13.584C4.04756 13.072 4.76756 12.472 5.59956 11.784C6.52756 11.016 7.36756 10.296 8.11956 9.624C8.87156 8.952 9.50356 8.312 10.0156 7.704C10.5436 7.08 10.9436 6.472 11.2156 5.88C11.5036 5.272 11.6476 4.656 11.6476 4.032C11.6476 3.248 11.4476 2.632 11.0476 2.184C10.6476 1.736 10.1196 1.512 9.46356 1.512C8.99956 1.512 8.55156 1.624 8.11956 1.848C7.68756 2.056 7.30356 2.352 6.96756 2.736C6.63156 3.104 6.35956 3.536 6.15156 4.032C5.94356 4.512 5.83956 5.024 5.83956 5.568C5.83956 5.968 5.89556 6.328 6.00756 6.648C6.13556 6.952 6.32756 7.264 6.58356 7.584C6.35956 7.632 6.15156 7.656 5.95956 7.656C5.57556 7.656 5.22356 7.592 4.90356 7.464C4.58356 7.336 4.30356 7.16 4.06356 6.936C3.83956 6.712 3.66356 6.448 3.53556 6.144C3.40756 5.84 3.34356 5.504 3.34356 5.136C3.34356 4.528 3.51956 3.952 3.87156 3.408C4.22356 2.848 4.68756 2.36 5.26356 1.944C5.83956 1.528 6.48756 1.2 7.20756 0.959999C7.94356 0.704 8.68756 0.576 9.43956 0.576C10.0956 0.576 10.6956 0.671999 11.2396 0.863999C11.7836 1.056 12.2476 1.336 12.6316 1.704C13.0156 2.056 13.3116 2.48 13.5196 2.976C13.7276 3.472 13.8316 4.016 13.8316 4.608ZM19.0504 18.864C18.4744 18.752 17.9384 18.576 17.4424 18.336C16.9624 18.112 16.5464 17.8 16.1944 17.4C15.8584 16.984 15.5864 16.48 15.3784 15.888C15.1864 15.28 15.0904 14.544 15.0904 13.68C15.0904 12.704 15.2264 11.696 15.4984 10.656C15.7704 9.616 16.1464 8.608 16.6264 7.632C17.1224 6.64 17.6984 5.704 18.3544 4.824C19.0264 3.928 19.7544 3.152 20.5384 2.496C21.3224 1.824 22.1464 1.296 23.0104 0.912C23.8904 0.511999 24.7784 0.311999 25.6744 0.311999C26.3464 0.311999 26.9224 0.439999 27.4024 0.696C27.8984 0.935999 28.3064 1.28 28.6264 1.728C28.9624 2.16 29.2104 2.688 29.3704 3.312C29.5304 3.92 29.6104 4.584 29.6104 5.304C29.6104 6.248 29.4904 7.24 29.2504 8.28C29.0264 9.32 28.6984 10.336 28.2664 11.328C27.8344 12.32 27.3064 13.272 26.6824 14.184C26.0744 15.08 25.3784 15.872 24.5944 16.56C23.8104 17.248 22.9544 17.8 22.0264 18.216C21.0984 18.632 20.1064 18.848 19.0504 18.864ZM18.0904 14.664C18.0904 15.752 18.2824 16.52 18.6664 16.968C19.0504 17.416 19.6104 17.704 20.3464 17.832C21.0664 17.8 21.7464 17.528 22.3864 17.016C23.0424 16.504 23.6424 15.856 24.1864 15.072C24.7304 14.272 25.2184 13.392 25.6504 12.432C26.0984 11.456 26.4744 10.488 26.7784 9.528C27.0824 8.568 27.3144 7.664 27.4744 6.816C27.6344 5.952 27.7144 5.24 27.7144 4.68C27.7144 3.8 27.6104 3.088 27.4024 2.544C27.2104 1.984 26.8824 1.648 26.4184 1.536C25.6824 1.632 24.9624 1.928 24.2584 2.424C23.5704 2.904 22.9144 3.512 22.2904 4.248C21.6824 4.984 21.1224 5.816 20.6104 6.744C20.0984 7.656 19.6504 8.584 19.2664 9.528C18.8984 10.472 18.6104 11.392 18.4024 12.288C18.1944 13.184 18.0904 13.976 18.0904 14.664ZM42.8941 4.608C42.8941 5.376 42.7181 6.12 42.3661 6.84C42.0301 7.56 41.5581 8.28 40.9501 9C40.3421 9.72 39.6141 10.464 38.7661 11.232C37.9341 11.984 37.0301 12.784 36.0541 13.632C35.6061 14.016 35.2221 14.36 34.9021 14.664C34.5981 14.968 34.3341 15.264 34.1101 15.552C33.8861 15.824 33.6861 16.096 33.5101 16.368C33.3501 16.624 33.1981 16.904 33.0541 17.208C34.3341 17.128 35.6061 16.84 36.8701 16.344C38.1501 15.848 39.2461 15.2 40.1581 14.4C40.2221 14.48 40.3021 14.608 40.3981 14.784C40.4941 14.944 40.5741 15.136 40.6381 15.36C40.7181 15.568 40.7821 15.8 40.8301 16.056C40.8941 16.296 40.9261 16.536 40.9261 16.776C40.9261 17.176 40.8381 17.52 40.6621 17.808C40.5021 17.984 40.2701 18.12 39.9661 18.216C39.6781 18.312 39.3341 18.384 38.9341 18.432C38.5341 18.48 38.1021 18.512 37.6381 18.528C37.1741 18.544 36.6941 18.552 36.1981 18.552C35.7181 18.552 35.2381 18.56 34.7581 18.576C34.2781 18.608 33.8141 18.648 33.3661 18.696C32.9341 18.76 32.5261 18.848 32.1421 18.96C31.7741 19.072 31.4621 19.224 31.2061 19.416C30.8221 19.24 30.4701 18.976 30.1501 18.624C29.8461 18.288 29.6301 17.92 29.5021 17.52C29.5981 17.056 29.7661 16.624 30.0061 16.224C30.2461 15.824 30.5661 15.408 30.9661 14.976C31.3821 14.544 31.8941 14.08 32.5021 13.584C33.1101 13.072 33.8301 12.472 34.6621 11.784C35.5901 11.016 36.4301 10.296 37.1821 9.624C37.9341 8.952 38.5661 8.312 39.0781 7.704C39.6061 7.08 40.0061 6.472 40.2781 5.88C40.5661 5.272 40.7101 4.656 40.7101 4.032C40.7101 3.248 40.5101 2.632 40.1101 2.184C39.7101 1.736 39.1821 1.512 38.5261 1.512C38.0621 1.512 37.6141 1.624 37.1821 1.848C36.7501 2.056 36.3661 2.352 36.0301 2.736C35.6941 3.104 35.4221 3.536 35.2141 4.032C35.0061 4.512 34.9021 5.024 34.9021 5.568C34.9021 5.968 34.9581 6.328 35.0701 6.648C35.1981 6.952 35.3901 7.264 35.6461 7.584C35.4221 7.632 35.2141 7.656 35.0221 7.656C34.6381 7.656 34.2861 7.592 33.9661 7.464C33.6461 7.336 33.3661 7.16 33.1261 6.936C32.9021 6.712 32.7261 6.448 32.5981 6.144C32.4701 5.84 32.4061 5.504 32.4061 5.136C32.4061 4.528 32.5821 3.952 32.9341 3.408C33.2861 2.848 33.7501 2.36 34.3261 1.944C34.9021 1.528 35.5501 1.2 36.2701 0.959999C37.0061 0.704 37.7501 0.576 38.5021 0.576C39.1581 0.576 39.7581 0.671999 40.3021 0.863999C40.8461 1.056 41.3101 1.336 41.6941 1.704C42.0781 2.056 42.3741 2.48 42.5821 2.976C42.7901 3.472 42.8941 4.016 42.8941 4.608ZM55.8409 1.488C56.3209 1.6 56.8089 1.784 57.3049 2.04C57.8169 2.28 58.2089 2.608 58.4809 3.024C57.6329 4.192 56.8409 5.4 56.1049 6.648C55.3689 7.896 54.6649 9.184 53.9929 10.512L55.1689 10.272C55.3129 10.432 55.3929 10.608 55.4089 10.8L53.5129 11.496C52.9369 12.68 52.4329 13.872 52.0009 15.072C51.5689 16.256 51.2169 17.48 50.9449 18.744C50.4649 18.728 50.0009 18.664 49.5529 18.552C49.1049 18.456 48.7129 18.224 48.3769 17.856C48.6649 16.896 48.9849 15.96 49.3369 15.048C49.6889 14.12 50.0729 13.192 50.4889 12.264C50.1849 12.296 49.8329 12.336 49.4329 12.384C49.0489 12.416 48.6969 12.432 48.3769 12.432C47.9449 12.432 47.4969 12.416 47.0329 12.384C46.5689 12.336 46.1209 12.256 45.6889 12.144C45.2569 12.016 44.8489 11.848 44.4649 11.64C44.0809 11.432 43.7449 11.152 43.4569 10.8C44.7209 9.36 45.8889 7.8 46.9609 6.12C48.0329 4.44 48.9769 2.72 49.7929 0.959999C50.3529 1.136 50.9049 1.352 51.4489 1.608C52.0089 1.864 52.5209 2.184 52.9849 2.568C52.4409 3.192 51.8569 3.872 51.2329 4.608C50.6249 5.328 50.0169 6.048 49.4089 6.768C48.8169 7.488 48.2569 8.176 47.7289 8.832C47.2169 9.488 46.7849 10.064 46.4329 10.56C46.8489 10.736 47.2729 10.864 47.7049 10.944C48.1529 11.008 48.6009 11.04 49.0489 11.04C49.3529 11.04 49.6889 11.032 50.0569 11.016C50.4409 11 50.7849 10.976 51.0889 10.944C51.8729 9.312 52.6569 7.72 53.4409 6.168C54.2249 4.6 55.0249 3.04 55.8409 1.488Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <main className="mt-10">
            <h5 className="text-[32px] text-center">Wisuda Angkatan XXI SMP Negeri 3 Kepanjen</h5>
            <h5 className="text-[24px] font-light text-center">07:00 - 12:30 WIB</h5>
            <div className="w-[809px] h-0.5 mt-4 bg-black mx-auto"></div>
            <h5 className="text-[28px] font-medium mt-8 text-center">Graha Cakrawala UM</h5>
            <h5 className="text-[24px] font-normal mt-8 text-center">Jalan Cakrawala , Sumbersari, Kecamatan Lowokwaru </h5>
            <h5 className="text-[24px] font-normal -m-2 text-center">Kota Malang</h5>
          </main>
        </section>
      </main>
    </React.Fragment>
  );
}
