import { jsonSort } from './jsonSort'

describe('JsonSort', () => {
  it('should work', () => {
    expect(jsonSort(input)).toMatchObject(output)
  })
})

var input = {
  'breadcrumb.activeSelectionForeground': '#c4db15',
  'editorCursor.foreground': '#f00',
  'tab.activeBorderTop': '#f00',
  'editorLineNumber.activeForeground': '#f00',
  'minimap.findMatchHighlight': '#f00',
  activityBar: {
    foreground: '#f00',
    activeBorder: '#f00',
  },
  'tab.activeBorder': '#f00',
  'panelTitle.activeBorder': '#f00',
  'tab.activeModifiedBorder': '#f00',
}

var output = {
  activityBar: {
    activeBorder: '#f00',
    foreground: '#f00',
  },
  'breadcrumb.activeSelectionForeground': '#c4db15',
  'editorCursor.foreground': '#f00',
  'editorLineNumber.activeForeground': '#f00',
  'minimap.findMatchHighlight': '#f00',
  'panelTitle.activeBorder': '#f00',
  'tab.activeBorder': '#f00',
  'tab.activeBorderTop': '#f00',
  'tab.activeModifiedBorder': '#f00',
}
