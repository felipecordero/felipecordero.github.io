---
title: "Seismic Performance of Reinforced Concrete Wall Structures: A Comprehensive Study"
date: 2025-06-28
draft: false
description: "Exploring my thesis research on the seismic performance of reinforced concrete wall structures commonly found in Chile, using advanced fiber models and time-history analyses to understand structural behavior under earthquake loads."
featured_image: "/images/thesis/thesis_image.png"
tags: ["thesis", "structural-engineering", "seismic-analysis", "reinforced-concrete", "chile", "earthquake-engineering", "fiber-models", "research"]
---

My thesis research focused on a critical aspect of structural engineering that directly impacts the safety of millions of people: the seismic performance of reinforced concrete (RC) wall structures commonly found in Chile. This comprehensive study utilized advanced computational methods to understand how these structures behave under earthquake loads and identify key factors that influence their performance.

For those interested in the complete technical details, the full thesis document is available for download <a href="/files/thesis/Thesis%20Felipe%20Cordero_ESP_original_version.pdf" target="_blank" rel="noopener">here</a>.

## Observed Earthquake Damage

Understanding the real damage observed in Chilean buildings after major earthquakes was a key motivation for this research. The following images show typical damage patterns at wall ends without special confinement, as seen in buildings in Macul and Ñuñoa. These observations highlight the need for improved design and analysis methods for reinforced concrete wall structures in seismic regions.

{{< figure src="/images/thesis/observed_damage_macul_nunoa.png" alt="Observed Damage in Macul and Ñuñoa" width="600" caption="Fig. 2.6 & 2.7: Observed damage in buildings in Macul and Ñuñoa after the earthquake. Damage is concentrated at wall ends without special confinement." >}}

## The Research Context

Chile is one of the most seismically active countries in the world, making the study of structural behavior under earthquake loads particularly relevant. My research examined the performance of RC wall structures that are prevalent in Chilean construction, particularly those built between 1996-2006 with 15 stories or more.

## Structural Typologies Studied

The research focused on two main structural configurations commonly found in Chilean buildings:

{{< figure src="/images/thesis/Building_structures.png" alt="Structural Models: Structure A and B" width="600" caption="Fig. 4.1: Structural models analyzed in the study. (a) Structure A, (b) Structure B." >}}

### Typical Building Characteristics
- **Layout**: Regular rectangular structures with aspect ratios between 2:1 and 3:1
- **Wall Distribution**: Long, continuous walls in the longer direction; rectangular and T-shaped walls in the shorter direction
- **Wall Thicknesses**: Primarily 20 cm (60% of cases) and 25 cm (17%)
- **Wall Lengths**: Ranging from 50 cm to 650 cm
- **Floor Heights**: Between 2.5 m and 3.2 m

### Material Properties
- **Concrete**: H30 grade (f'c = 25 MPa)
- **Steel**: A63-42H grade (fy = 420 MPa)
- **Reinforcement**: Meshes varying from φ8 mm at 25 cm to φ12 mm at 17 cm

## Advanced Computational Modeling

The research employed sophisticated computational techniques to accurately simulate structural behavior using OpenSees software:

### Fiber Model Implementation
- **Cross-section Discretization**: Concrete modeled as rectangular fibers, steel reinforcement as concentrated fibers
- **Material Characterization**: Advanced constitutive models for both concrete and steel
- **Validation**: Rigorous comparison with experimental data from existing literature

## Technical Tools and Software Stack

This research project required a comprehensive set of computational tools and software to handle the complex numerical analyses and data processing:

### Primary Analysis Software
- **OpenSees**: The core analysis platform for nonlinear structural analysis and fiber modeling
- **MATLAB**: Used for data processing, post-processing of results, and creating custom analysis scripts
- **Python**: Employed for automation of analysis workflows, data visualization, and batch processing of multiple analyses

### Documentation and Presentation
- **LaTeX**: Complete thesis document preparation with professional mathematical notation and formatting
- **Python (Matplotlib/Plotly)**: Advanced plotting and visualization of structural response data
- **MATLAB**: Additional plotting capabilities for time-history analysis results

### Computational Workflow
The research involved a sophisticated computational pipeline:

1. **Model Development**: OpenSees for structural modeling and fiber element implementation
2. **Data Processing**: MATLAB and Python for processing raw analysis results
3. **Visualization**: Python and MATLAB for creating publication-quality figures
4. **Documentation**: LaTeX for professional thesis formatting and mathematical equations
5. **Automation**: Python scripts for batch processing multiple analysis cases

This multi-tool approach allowed for efficient handling of the complex parametric studies and ensured robust, reproducible results across hundreds of analysis cases.

### Material Models
**Steel Modeling:**
- **Steel02 Model**: For general steel behavior with yield strength, elastic modulus, and strain hardening
- **ReinforcingSteel Model**: Based on Chang and Mander (1994), incorporating bar buckling effects
- **Buckling Parameters**: Using "Gomes and Appleton" parameters for longitudinal bar buckling

**Concrete Modeling:**
- **Concrete02 Model**: Incorporating both compression and tension capacity
- **Confinement Effects**: Calculating confined concrete strength using effective confinement pressure
- **Fracture Energy**: Defining post-peak behavior for both confined and unconfined concrete

## Model Validation

The computational models were rigorously validated against experimental data:

### Test Specimens
- **RW2 (Rectangular Wall 2)**: Used for calibration and validation
- **TW2 (T-shaped Wall 2)**: Primary focus for detailed analysis

### Validation Results
- **Global Response**: Good agreement with experimental drift vs. basal shear data
- **Capacity Prediction**: Model predicted higher shear capacity when web was in compression (~10% higher)
- **Deformation Patterns**: Captured the relationship between tensile and compressive deformations

## Comprehensive Parametric Study

The research conducted extensive parametric studies to understand the influence of various design parameters:

- **Variation of number of stories**
- **Variation of axial load and edge confinement**
- **Length of confined zone**
- **Foundation type and perimeter wall thickness**
- **Different seismic records**


### 1. Confinement Effects
- **Impact**: Confinement significantly improves lateral load capacity and ductility
- **Finding**: Unconfined concrete leads to more brittle response
- **Application**: Critical for design decisions in high-seismic regions

### 2. Concrete Quality Variation
- **Study**: Decreasing f'c by 30%
- **Result**: Reduced lateral load capacity but maintained ductility
- **Implication**: Material degradation doesn't necessarily compromise structural ductility

### 3. Longitudinal Bar Buckling
- **Modeling**: Incorporating buckling effects between stirrups
- **Impact**: Affects load-displacement response and deformation capacity
- **Significance**: Critical for understanding post-peak behavior

### 4. Axial Load Effects
- **Range Studied**: 0.075 f'c·Ag to 0.3 f'c·Ag
- **Findings**: 
  - Higher axial loads increase lateral force capacity
  - Rapid reduction in ductility with increasing axial load
  - At 0.3 f'c·Ag, structures become brittle with "violent decay of capacity"
- **Practical Implication**: Critical balance between strength and ductility

{{< figure src="/images/thesis/seismic_registries.png" alt="Seismic Registries" width="600" caption="Fig. 4.5: Registros considerados. Seismic acceleration records used in the study for Concepción, Maipú, Viña del Mar, and Santiago Centro." >}}

### 5. Confinement Zone Length
- **Variations**: 15%, 30%, 50% of web length
- **Result**: Longer confined zones improve ductility and capacity
- **Design Impact**: Important consideration for structural detailing

## Time-History Analysis of Full Structures

The research extended beyond component-level analysis to full structural systems:

### Analyzed Structures
- **Structure A**: Four different transverse sections in T-shaped walls
- **Structure B**: Alternative structural configuration
- **Modeling**: Perimeter walls as linear elastic, slabs as elasto-plastic elements

### Seismic Records Used
- Concepción EO
- Maipu
- Santiago Centro
- Viña del Mar

## Key Findings and Implications

### Structure A: Moments and Moment-Curvature Results

{{< figure src="/images/thesis/structureA_moments_curvature.png" alt="Structure A Moments and Moment-Curvature" width="600" caption="Fig. 5.1 & 5.2: Structure A. Moments at each story over time and moment-curvature plots for wall sections." >}}


### Structure A: Variable Axial Load with Confinement

{{< figure src="/images/thesis/Structure A-Variable Axial Load-With Confinement.png" alt="Structure A Variable Axial Load With Confinement" width="700" caption="Fig. 5.21: Structure A. Variation of axial load with ACI-equivalent confinement. Shear, moment, unit deformation, and roof drift results." >}}

### 1. Shear vs. Flexural Behavior
**Critical Finding**: For the analyzed structures, shear capacity was generally not exceeded, indicating that flexural behavior and associated deformations were the primary concerns for damage.

### 2. Foundation Effects
- **Rigid vs. Flexible Foundations**: Significant differences in structural response
- **Perimeter Wall Interaction**: Crucial for accurate modeling
- **Thickness Effects**: Larger perimeter wall thickness reduces maximum drifts but also reduces flexibility


### 3. Height Effects
- **Multi-story Analysis**: 10, 15, 20, and 25-story variations
- **Dynamic Response**: Spectral comparisons show how building height affects response
- **Design Implications**: Height-specific considerations needed

### 4. Seismic Record Sensitivity
- **Response Variation**: Significant differences based on acceleration record
- **Confinement Benefits**: More controlled response with proper confinement across different records

## Practical Applications

The research findings have direct implications for:

### 1. Design Practice
- **Confinement Requirements**: Optimal confinement zone lengths for different axial loads
- **Axial Load Limits**: Balancing strength and ductility requirements
- **Foundation Modeling**: Importance of accurate foundation representation

### 2. Code Development
- **Seismic Provisions**: Evidence-based recommendations for Chilean building codes
- **Material Requirements**: Concrete and steel specifications for seismic regions
- **Detailing Requirements**: Reinforcement detailing for improved performance

### 3. Construction Industry
- **Quality Control**: Material and construction quality requirements
- **Inspection Guidelines**: Critical areas for structural inspection
- **Retrofit Strategies**: Identifying vulnerable structures and improvement methods

## Academic and Professional Impact

This research contributed to:

- **Scientific Literature**: Advanced understanding of RC wall behavior under seismic loads
- **Engineering Practice**: Practical guidelines for design and construction
- **Code Development**: Evidence-based recommendations for seismic design
- **Educational Programs**: Enhanced teaching materials for earthquake engineering

## Future Research Directions

The thesis opened several avenues for continued research:

- **Advanced Material Models**: Further refinement of constitutive relationships
- **3D Modeling**: Extension to full three-dimensional structural analysis
- **Performance-Based Design**: Development of performance criteria for different hazard levels
- **Retrofit Strategies**: Application of findings to existing building assessment

## Conclusion

This thesis represents a comprehensive investigation into the seismic performance of reinforced concrete wall structures, combining advanced computational methods with practical engineering applications. The research not only advanced the understanding of structural behavior under seismic loads but also provided practical guidance for the design and construction of safer buildings in seismically active regions.

The findings emphasize the critical importance of proper confinement, axial load management, and foundation modeling in achieving ductile structural behavior during earthquakes. These insights continue to influence my approach to structural engineering and inform my work in developing safer, more resilient structures.

This research represents not just an academic achievement, but a contribution to the safety and resilience of communities in seismically active regions worldwide. 