---
title: "Concrete Beam Designer"
description: "Una aplicación web moderna para análisis y diseño de vigas de concreto, con análisis de cargas, configuraciones de apoyo y visualizaciones interactivas."
featured_image: "/images/beams_demo_image.png"
tags: ["structural-engineering", "design-tools", "concrete-design", "python", "streamlit", "beam-analysis"]
---


## Welcome! 👋

Many years ago, during my early coding adventures, I developed a concrete beam calculator to assist with structural analysis using **Python**. Today, I'm happy to present its modern reincarnation as a web application, powered by [Streamlit](https://streamlit.io/). It could be not perfect, but was very useful for me at the beginning of my structural engineering career.

{{< demo-image 
  src="https://static.streamlit.io/badges/streamlit_badge_black_white.svg"
  alt="Streamlit App"
  width="200"
  link="https://concrete-beam-calculator.streamlit.app/"
>}}


## Features 🚀

- **Load Analysis**: Uniform distribuited load
- **Support Configurations**: Analyze beams with different support conditions such as simply supported, fixed, and cantilevered.
- **Material Selection**: Choose from a range of materials, each with predefined properties.
- **Section Properties**: Define the dimensions.
- **Visualization**: Explore the results visually.


## Demo video

{{< iframe id="demo-video" src="https://github.com/user-attachments/assets/19bc97a0-0c20-4ac2-aec8-7d517a7ae91e" width="100%" height="800" >}}
## Test the app

{{< iframe id="test-app" src="https://concrete-beam-calculator.streamlit.app?embed=true&embed_options=show_footer" width="100%" height="800" >}}

## Getting Started 🛠️

To use the Concrete Beam Calculator:

1. Visit the [Concrete Beam Calculator App](https://concrete-beam-calculator.streamlit.app/).
2. Input the beam parameters.
3. Define the loading conditions and support configurations.
4. Click "Calculate" and Voilá.
5. View the results!

## Installation 🖥️

To run the **Concrete Beam Calculator** locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/felipecordero/vigaHA.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vigaHA
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Launch the Streamlit app:
   ```bash
   streamlit run streamlit_app.py
   ```

## The PySide6 App is also present! 🖥️

![Desktop App](assets/image-2.png)

If you want to try the Desktop App:

1. Navigate to the project directory:
   ```bash
   cd vigaHA
   ```
2. In the file requirements, uncomment the line:
   ```bash
   # PySide6==6.8.0.2
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Launch the Streamlit app:
   ```bash
   python vigas.py
   ```

## Contributing 🤝

I welcome contributions to enhance the Beam Calculator. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and concise messages.
4. Submit a pull request detailing your changes.

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

A heartfelt thank you to the open-source community and the developers of [Streamlit](https://streamlit.io/) for providing the tools that made this project possible. 
