---
title: How I Published My Portfolio On A Custom Domain
description: Trying to create a simple post in WordPress
date: '2020-08-30'
draft: false
slug: '/pensieve/wordpress-publish-error'
external: 'https://medium.com/@bhavidhingra9/how-i-published-my-portfolio-on-a-custom-domain-f04e31302293?sk=718742404d4424960d550a11bf651f16'
tags:
  - Portfolio
  - Personal Website
  - Custom Domain
  - Netlify
  - Gatsby
---

## Problem

Recently while working on a WordPress project with [Ups Dock](https://github.com/Upstatement/ups-dock), I encountered a weird error where I wasn't able to update or publish a simple post in my local WP admin.

It looked something like this:

![Draft fail](./draft-fail.png)

Sometimes the error message would be slightly more helpful: `Publishing failed. Error message: The response is not a valid JSON response.`

![Publish error](./publish-error.png)

And if I popped open the console, I saw these errors:

![Console errors](./console-errors.png)

## Solution

Since the error message had to do with a JSON response, I initially thought it was a Gutenberg or ACF issue. But it turned out this was happening because I was on the https WP admin (i.e. [https://project.ups.dock/wp-admin](https://project.ups.dock/wp-admin)), not the unsecure WP admin ([http://project.ups.dock/wp-admin](http://project.ups.dock/wp-admin)).

It was a CORS error!! I was trying to modify a non-https domain from a https domain. Switching to a non-https WP admin allowed me to publish posts with no problem.
