export function HPLCContent() {
  return (
    <>
      <p>When a research compound is advertised as "99% pure," that number almost always comes from a single technique: high-performance liquid chromatography, or HPLC. It is the analytical backbone of compound verification, yet the percentage it produces is widely quoted and rarely understood. Here is what HPLC actually measures and why the method matters as much as the result.</p>

      <h2>What HPLC measures</h2>
      <p>HPLC separates the individual components of a mixture so they can be measured one by one. A liquid sample is pushed under high pressure through a column packed with a finely-particled material. Different molecules travel through this column at different speeds depending on how strongly they interact with the packing material. By the time the sample exits the column, its components have separated into distinct bands.</p>
      <p>A detector at the end of the column records each component as it passes, producing a chromatogram — a graph of detector signal over time. Each peak on the chromatogram represents a distinct compound, and the area under each peak corresponds to how much of that compound is present.</p>

      <h2>How a purity percentage is calculated</h2>
      <p>The purity figure on a Certificate of Analysis is derived directly from peak areas. The software measures the total area of all peaks, then calculates what fraction of that total belongs to the target compound. If the target peak accounts for 99.2% of the combined area, the purity is reported as 99.2%.</p>
      <p>This is why the chromatogram matters as much as the number. A purity figure is a summary; the chromatogram is the evidence. A genuinely pure sample shows one tall, sharp, dominant peak with only minor peaks nearby. A questionable sample might report a high number while hiding several significant impurity peaks.</p>

      <h2>Why the method affects the result</h2>
      <p>Not all HPLC runs are equal. The detection wavelength, column type, mobile phase, and run length all influence what the instrument sees. A short run might not give late-eluting impurities time to appear. A detector set to one wavelength might miss impurities that only absorb at another.</p>
      <p>This is why reputable laboratories document their method on the COA and why the most rigorous testing pairs HPLC with mass spectrometry. HPLC tells you how much of the sample is one dominant compound; mass spectrometry confirms that the dominant compound is actually the molecule you intended.</p>

      <h2>HPLC versus other methods</h2>
      <p>You may see purity backed by other techniques. Mass spectrometry confirms molecular identity and detects mass-based impurities but is not ideal for quantifying overall purity percentage. Gel electrophoresis can separate larger molecules but lacks the resolution of HPLC for small peptides. For short-chain peptides and amino acid compounds, HPLC remains the standard for quantifying purity, with mass spec as the complementary identity check.</p>

      <h2>What a good HPLC result looks like</h2>
      <p>When evaluating an HPLC result, look beyond the headline number. A trustworthy result includes the actual chromatogram, not just a percentage. The target peak should be sharp and dominant. The method should be documented. And ideally, the test should be performed by an independent, accredited laboratory rather than the supplier's in-house equipment.</p>
      <p>A 99% purity claim from an unnamed lab with no chromatogram is a marketing statement. The same number from an accredited third-party lab, backed by a published chromatogram and a confirming mass spec, is a verifiable result. The difference is everything.</p>
    </>
  )
}
