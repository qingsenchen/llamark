import type { MilkdownPlugin } from '@milkdown/ctx'
import { toggleEmphasisCommand, toggleInlineCodeCommand, toggleLinkCommand, toggleHighlightCommand, toggleStrongCommand, updateLinkCommand, updateHighlightCommand } from '../mark'
import {
  createCodeBlockCommand,
  downgradeHeadingCommand,
  insertHardbreakCommand,
  insertHrCommand,
  insertImageCommand,
  liftFirstListItemCommand,
  liftListItemCommand,
  sinkListItemCommand,
  splitListItemCommand,
  turnIntoTextCommand,
  updateImageCommand,
  wrapInBlockquoteCommand,
  wrapInBulletListCommand,
  wrapInHeadingCommand,
  wrapInOrderedListCommand,
} from '../node'

/// @internal
export const commands: MilkdownPlugin[] = [
  turnIntoTextCommand,
  wrapInBlockquoteCommand,
  wrapInHeadingCommand,
  downgradeHeadingCommand,
  createCodeBlockCommand,
  insertHardbreakCommand,
  insertHrCommand,

  insertImageCommand,
  updateImageCommand,

  wrapInOrderedListCommand,
  wrapInBulletListCommand,
  sinkListItemCommand,
  splitListItemCommand,
  liftListItemCommand,
  liftFirstListItemCommand,

  toggleEmphasisCommand,
  toggleInlineCodeCommand,
  toggleStrongCommand,

  toggleLinkCommand,
  updateLinkCommand,

  toggleHighlightCommand,
  updateHighlightCommand,


]
