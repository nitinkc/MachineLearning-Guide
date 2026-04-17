"""
Custom MkDocs extensions for handling Mermaid diagrams and abbreviations.
"""
from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor
import re
import os


class MermaidPreprocessor(Preprocessor):
    """Preprocessor to handle Mermaid diagram code blocks."""

    def run(self, lines):
        """Process lines to convert Mermaid code blocks and handle abbreviations."""
        new_lines = []
        i = 0

        while i < len(lines):
            line = lines[i]

            # Check for Mermaid code block start
            if re.match(r'^```\s*mermaid\s*$', line):
                # Start collecting diagram content
                diagram_lines = []
                i += 1

                # Collect all lines until closing ```
                while i < len(lines) and not re.match(r'^```\s*$', lines[i]):
                    diagram_lines.append(lines[i])
                    i += 1

                # Add the diagram as a div with class mermaid
                new_lines.append('<div class="mermaid">')
                new_lines.extend(diagram_lines)
                new_lines.append('</div>')

                # Skip the closing ```
                if i < len(lines):
                    i += 1
            # Check for abbreviations include pattern
            elif re.match(r'^--8<--\s+"?_abbreviations\.md"?\s*$', line):
                # Load abbreviations from file
                abbr_lines = self._load_abbreviations()
                new_lines.extend(abbr_lines)
                i += 1
            else:
                new_lines.append(line)
                i += 1

        return new_lines

    def _load_abbreviations(self):
        """Load abbreviations from _abbreviations.md file."""
        try:
            # Try to find the abbreviations file
            abbr_path = os.path.join(os.path.dirname(__file__), 'docs', '_abbreviations.md')
            if os.path.exists(abbr_path):
                with open(abbr_path, 'r', encoding='utf-8') as f:
                    return f.read().split('\n')
            else:
                # Fallback: return empty list if file not found
                return []
        except Exception:
            return []


class MermaidExtension(Extension):
    """Extension to process Mermaid diagrams and abbreviations."""

    def extendMarkdown(self, md):
        """Register the preprocessor with Markdown."""
        md.preprocessors.register(
            MermaidPreprocessor(md),
            'mermaid',
            30  # Priority
        )


def makeExtension(**kwargs):
    """Make the extension."""
    return MermaidExtension(**kwargs)

