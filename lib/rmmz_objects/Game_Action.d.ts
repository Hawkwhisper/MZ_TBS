import { RPG } from "../RPG";

import {
    Game_Item,
    Game_Battler,
    Game_BattlerBase,
    Game_Unit
} from ".";

// TODO : FIX THE TYPING TO GAME_UNITY
declare class Game_Action {

    public readonly EFFECT_RECOVER_HP: number;
    public readonly EFFECT_RECOVER_MP: number;
    public readonly EFFECT_GAIN_TP: number;
    public readonly EFFECT_ADD_STATE: number;
    public readonly EFFECT_REMOVE_STATE: number;
    public readonly EFFECT_ADD_BUFF: number;
    public readonly EFFECT_REMOVE_DEBUFF: number;
    public readonly EFFECT_SPECIAL: number;
    public readonly EFFECT_GROW: number;
    public readonly EFFECT_LEARN_SKILL: number;
    public readonly EFFECT_COMMON_EVENT: number;
    public readonly SPECIAL_EFFECT_ESCAPE: number;
    public readonly HITTYPE_CERTAIN: number;
    public readonly HITTYPE_PHYSICAL: number;
    public readonly HITTYPE_MAGICAL: number;
    
    private _subjectActorId: number;
    private _subjectEnemyIndex: number;
    private _forcing: boolean;
    private _item: Game_Item;
    private _targetIndex: number;

    constructor(subject: Game_BattlerBase, forcing: boolean);
    
    public initialize(subject: Game_BattlerBase, forcing: boolean);
    public clear(): void;
    public setSubject(subject: Game_BattlerBase): void;
    public subject(): Game_BattlerBase;
    public friendsUnit(): Game_BattlerBase;
    public opponentsUnit(): Game_BattlerBase; // TODO : make the type more clear?
    public setEnemyAction(action: unknown): void;
    public setAttack(): void;
    public setGuard(): void;
    public setSkill(skillId: number): void;
    public setItem(itemId: number): void;
    public setItemObject(object: Record<string, unknown>): RPG.DataItemBase;
    public setTarget(targetIndex: number): void;
    public item(): RPG.DataItemBase;
    public isSkill(): boolean;
    public isItem(): boolean;
    public numRepeats(): number;
    public checkItemScope(list: number[]): boolean;
    public isForOpponent(): boolean;
    public isForFriend(): boolean;
    public isForEveryone(): boolean;
    public isForAliveFriend(): boolean;
    public isForDeadFriend(): boolean;
    public isForUser(): boolean;
    public isForOne(): boolean;
    public isForRandom(): boolean;
    public isForAll(): boolean;
    public needsSelection(): boolean;
    public numTargets(): boolean;
    public checkDamageType(list: number[]): boolean;
    public isHpEffect(): boolean;
    public isMpEffect(): boolean;
    public isDamage(): boolean;
    public isRecover(): boolean;
    public isDrain(): boolean;
    public isHpRecover(): boolean;
    public isMpRecover(): boolean;
    public isCertainHit(): boolean;
    public isPhysical(): boolean;
    public isMagical(): boolean;
    public isAttack(): boolean;
    public isGuard(): boolean;
    public isMagicSkill(): boolean;
    public decideRandomTarget(): void;
    public setConfusion(): void;
    public prepare(): void;
    public isValid(): boolean;
    public speed(): number;
    public makeTargets(): number[];
    public repeatTargets(targets): number[];
    public confusionTarget(): boolean;
    public targetsForEveryone(): Game_BattlerBase[];
    public targetsForOpponents(): unknown;
    public targetsForFriends(): unknown;
    public randomTargets(unit: Game_Unit<Game_Battler>);
}

// TODO : not ready to distribution since it lacks a lots of context