/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PURE API", "index.html", [
    [ "Introduction", "index.html", [
      [ "Motivation", "index.html#autotoc_md93", null ],
      [ "Copy & Paste", "index.html#autotoc_md94", null ],
      [ "Sources", "index.html#autotoc_md95", null ]
    ] ],
    [ "Engine Usage", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html", [
      [ "Initialization", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html#autotoc_md1", null ],
      [ "Loading Resources", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html#autotoc_md2", null ],
      [ "Rendering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html#autotoc_md3", null ],
      [ "Shutdown", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html#autotoc_md4", null ],
      [ "Samples", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html#autotoc_md5", null ]
    ] ],
    [ "Rendering Architecture & Pipeline", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html", [
      [ "Geometry Stage", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md7", [
        [ "Vertex Specification", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md8", null ],
        [ "Vertex Processing", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md9", [
          [ "Modeling Transformation", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md10", null ],
          [ "View Transformation", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md11", null ],
          [ "Projection Transformation", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md12", null ]
        ] ],
        [ "Primitive (Triangle) Assembly", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md13", [
          [ "Clipping", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md14", null ],
          [ "Perspective Divide", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md15", null ],
          [ "Viewport Transformation", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md16", null ],
          [ "Face Culling", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md17", null ]
        ] ]
      ] ],
      [ "Rasterization / Rendering Stage", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md18", [
        [ "Triangle Setup / Scan-Line Conversion", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md19", [
          [ "Defining Spans", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md20", null ],
          [ "Shading Spans", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md21", null ]
        ] ],
        [ "Fragment Processing", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md22", null ],
        [ "Per-Sample Processing", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md23", [
          [ "Pixel Ownership Test", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md24", null ],
          [ "Scissor Test", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md25", null ],
          [ "Alpha Test", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md26", null ],
          [ "MSAA (MultiSample AntiAliasing)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md27", null ],
          [ "Stencil Test", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md28", null ],
          [ "Depth Test", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md29", null ],
          [ "Blending", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md30", null ],
          [ "Dithering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md31", null ],
          [ "Logic Operations", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md32", null ],
          [ "Write Mask", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md33", null ]
        ] ]
      ] ],
      [ "Do’s and don’t’s", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-02-_architecture.html#autotoc_md34", null ]
    ] ],
    [ "Glossary", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html", [
      [ "Scene", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md36", null ],
      [ "Rendering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md37", null ],
      [ "Pipeline", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md38", null ],
      [ "Graphics / Rendering Pipeline", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md39", null ],
      [ "Pixel", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md40", null ],
      [ "Vertex", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md41", null ],
      [ "Primitive / Face", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md42", null ],
      [ "Mesh", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md43", null ],
      [ "Vertex Shader", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md44", null ],
      [ "Pixel / Fragment Shader", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md45", null ],
      [ "Vertex Pipeline / Processor", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md46", null ],
      [ "Vertex Processing / Shader Unit", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md47", null ],
      [ "Pixel / Fragment Processor / Pipeline", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md48", null ],
      [ "Fragment Processing / Shader Unit", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md49", null ],
      [ "Unified Shader", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md50", null ],
      [ "Fragment", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md51", null ],
      [ "Raster Pipeline / ROP / Z-pipe", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md52", null ],
      [ "Raster Operation Unit", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md53", null ],
      [ "Fragment Crossbar", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md54", null ],
      [ "Texel", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md55", null ],
      [ "Texture", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md56", null ],
      [ "Texture Unit", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md57", null ],
      [ "Texture Filtering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md58", null ],
      [ "Isotropic Filtering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md59", null ],
      [ "Anisotropic Filtering", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md60", null ],
      [ "MIP mapping", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md61", null ],
      [ "Multitexturing", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md62", null ],
      [ "Aliasing", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md63", null ],
      [ "Antialiasing, AA", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md64", null ],
      [ "Multisample Antialiasing, MSAA", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md65", [
        [ "Quincunx Antialiasing (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md66", null ],
        [ "AccuView Antialiasing (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md67", null ],
        [ "Transparency Antialiasing (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md68", null ],
        [ "Coverage Sampling Antialiasing, CSAA (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md69", null ]
      ] ],
      [ "Supersampled Antialiasing, SSAA", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md70", null ],
      [ "Shading", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md71", [
        [ "Flat Shading", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md72", null ],
        [ "Gouraud Shading", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md73", null ],
        [ "Phong Shading", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md74", null ],
        [ "Dot-product texture blending, DOT3", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md75", null ]
      ] ],
      [ "Rendering Pipeline Architecture", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md76", null ],
      [ "HW T&L - Hardware Transformation and Lighting", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md77", [
        [ "Pre-Transform (pre-T&L) Cache", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md78", null ],
        [ "Post-Transform (post-T&L) Cache", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md79", null ]
      ] ],
      [ "AGP Fast Writes", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md80", null ],
      [ "HyperZ (ATi)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md81", [
        [ "Hierarchical Z, HiZ", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md82", null ],
        [ "Z Compression", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md83", null ],
        [ "Fast Z Clear", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md84", null ]
      ] ],
      [ "Lightspeed Memory Architecture, LMA (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md85", null ],
      [ "Nvidia Shading Rasterizer, NSR (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md86", null ],
      [ "Render to Vertex Buffer, R2VB", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md87", null ],
      [ "High Dynamic Range Rendering, HDR", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md88", null ],
      [ "Shadow Buffers (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md89", null ],
      [ "UltraShadow (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md90", null ],
      [ "UltraShadow II (nVidia)", "md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-03-_glossary.html#autotoc_md91", null ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_p_r00_fs_reduced_rendering_engine_8cpp.html",
"_p_r_r_e_g_lextension_funcs_8cpp.html#a5d7846cb6150d5449c3aaaea2a308da0",
"_p_r_r_e_g_lextension_funcs_8cpp.html#ad020818088356bdc7710ac9ec8cb771b",
"_p_r_r_e_g_lextension_funcs_8h.html#a3fc1fa017fa3554705be4f6be0d5b449",
"_p_r_r_e_g_lextension_funcs_8h.html#aaf6b0d7cf40e824281d58ca35128b28a",
"_p_r_r_e_i_renderer_8h_source.html",
"_p_r_r_e_vertex_transfer_mode_8h.html#a9d987113803c0d2b7c547a74cd67373f",
"class_p_r_r_e_camera.html#af6705c57c4b9b94b05f86490fe9005af",
"class_p_r_r_e_manager.html#ad5b9c7b124b5a0dd9dd4da34f3e3b061",
"class_p_r_r_e_mesh3_d_manager.html#a829f620ca53780ed9abdd59401cad9d4",
"class_p_r_r_e_renderer_s_wincremental_impl.html#a135b2d68bad07381d9d13f8450493a2e",
"class_p_r_r_e_texture_manager_1_1_p_r_r_e_texture_manager_impl.html#a007ba35637e281381a53d17409f8212a",
"class_p_r_r_e_window_impl.html#a35621298a3b4822b1d597cc0a010dca3",
"class_p_r_r_ehw_video_discover_open_g_l__1__2.html#a8d2d953867ce4fe36409acccd4c685c3",
"class_p_r_r_ehw_video_impl.html#aed872581fd7283b75b0ad546a369c7d6",
"md__d_____p_r00_f______developing____projects__p_g_e__p_g_e__p_r_r_e_docpages_internal_menu-01-_usage.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';