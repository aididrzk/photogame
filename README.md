# Exposure Quest — Basic Photography Learning Game

A responsive, browser-only learning game for diploma students studying the photography exposure trio: ISO, shutter speed, and aperture.

## What's included

- `index.html` — page structure and screens
- `style.css` — responsive visual design
- `script.js` — gameplay, scoring, feedback, and editable question bank

No backend, database, API key, package installation, or build step is required.

## Run locally

1. Download and unzip the project.
2. Open `index.html` in a modern browser.
3. Select **Start the quest**, review the instructions, and select **Enter the arena**.
4. Try the answer targets. On desktop, you can also press `1`, `2`, or `3` to select targets A, B, or C while the game is open.
5. Read feedback, then select **Continue** to move on.

The game is untimed by design, so students can focus on the learning outcome. The pace toggle is provided as a preference, but the game does not penalize or reward speed.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `exposure-quest`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the **root** of the repository.
3. Open the repository's **Settings**.
4. Select **Pages** in the left sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings. It usually follows the pattern `https://YOUR-USERNAME.github.io/exposure-quest/`.

If your repository uses a different branch, select that branch instead. Keep the file names and capitalization exactly as shown. All local assets use relative paths, so the project works as a repository project site.

## Edit the questions

Open `script.js` and find the section labelled `EDITABLE QUESTION BANK`. Each question is an object with these fields:

- `type`: topic label shown above the question
- `question`: the question text
- `context`: optional supporting situation
- `options`: exactly three answer choices
- `answer`: zero-based index of the correct option (`0` is the first option, `1` the second, `2` the third)
- `explanation`: feedback shown after the student selects an answer
- `takeaway`: short review note shown on the results screen

Keep exactly three options per question unless you also change the target interface in `index.html` and `script.js`. Keep `answer` at `0`, `1`, or `2`. The built-in bank contains 12 questions, including a final new-situation challenge.

## Scoring

- 10 points for a correct answer on the first attempt
- 5 points for a correct answer after an incorrect attempt
- Incorrect choices do not add points
- Each question can score only once, even if a student clicks repeatedly
- Speed does not affect the learning score
- The results page shows the score, first-try correct rate, and explanations

## Manual testing checklist

- [ ] Homepage loads and **Start the quest** opens the briefing.
- [ ] **Home** returns to the homepage.
- [ ] Untimed mode can be toggled before the game starts.
- [ ] **Enter the arena** starts a fresh run with 12 questions.
- [ ] Each question shows three readable answer targets.
- [ ] Clicking or tapping a wrong answer shows feedback and allows another choice.
- [ ] Clicking or tapping the correct answer locks the question and shows **Continue**.
- [ ] Repeated clicks cannot score the same question more than once.
- [ ] Continue advances the question and the progress bar updates.
- [ ] Completing the final question opens the results screen.
- [ ] Results include the score, first-try rate, and answer explanations.
- [ ] **Play again** resets the score and starts a new shuffled run.
- [ ] **Restart game** asks for confirmation before resetting.
- [ ] **Exit to home** asks for confirmation.
- [ ] Layout is usable at desktop, tablet, and narrow mobile widths.
- [ ] Keyboard controls `1`, `2`, and `3` select answer targets while the game is active.

## Teaching note

The quiz is designed to teach the main roles of the three settings, not every technical detail of exposure. Real-world results also depend on the camera, lens, light, subject movement, focus, and the photographer's intent. Review the question bank against your own lecture notes before using it for formal assessment.
