CSS Layout Deep Dive: Flexbox (Flexible Box Layout)
📐 Introduction to Flexbox
The Flexible Box Layout Module (Flexbox) is a powerful, one-dimensional CSS layout system designed to arrange items within a container (the flex container) along either a row or a column. Its primary goal is to provide an efficient way to lay out, align, and distribute space among items, even when the sizes of those items are unknown or dynamic.

Flexbox is considered the standard method for designing components like navigation bars, aligning form elements, and handling complex spacing within a single direction.

Core Terminology
Flex Container: The parent element on which display: flex; is set.

Flex Items: The direct children of the Flex Container.

Main Axis: The primary axis along which the flex items are laid out (defined by flex-direction).

Cross Axis: The axis perpendicular to the main axis.

Essential Flexbox Properties
Flexbox properties are divided into those applied to the Container and those applied to the Items.

Properties for the Flex Container
These properties control the overall layout and alignment of the children:
I will convert the table detailing the Flex Container Properties into a professional text format for your documentation.

Properties Applied to the Flex Container
The following properties are set on the parent element (display: flex;) to control the layout and alignment of its direct children (Flex Items):

display:

Value: flex

Function: This is the mandatory command that initializes the Flexible Box layout, turning the element into a flex container.

flex-direction:

Value Options: row (default), column, row-reverse, column-reverse.

Function: Defines the primary direction (the Main Axis) along which the items are laid out, which can be horizontal or vertical, and controls the order of items.

justify-content:

Value Options: flex-start, flex-end, center, space-between, space-around, space-evenly.

Function: Aligns the Flex Items along the Main Axis. Its primary role is managing the distribution of free space between or around the items.

align-items:

Value Options: flex-start, flex-end, center, stretch, baseline.

Function: Aligns the Flex Items along the Cross Axis (the axis perpendicular to the Main Axis).

flex-wrap:

Value Options: nowrap (default), wrap, wrap-reverse.

Function: Controls whether the flex items are constrained to a single line (nowrap) or are allowed to wrap onto multiple lines if they exceed the container's size.

gap:

Value Options: 10px, 1rem.

